import React, { useState } from 'react';
import { Clock, FastForward, Rewind, Play } from 'lucide-react';
import { SEO } from './components/SEO';

interface TimeInput {
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
}

function AudiobookPercentage() {
  // 状态管理
  const [currentTime, setCurrentTime] = useState<TimeInput>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [totalTime, setTotalTime] = useState<TimeInput>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [percentage, setPercentage] = useState(0);

  // 将时间对象转换为总秒数
  const timeToSeconds = (time: TimeInput): number => {
    return ((time.hours || 0) * 3600) + ((time.minutes || 0) * 60) + (time.seconds || 0);
  };

  // 处理输入变化
  const handleInputChange = (type: 'current' | 'total', field: keyof TimeInput, value: string) => {
    const numValue = parseInt(value) || 0;
    const maxValue = field === 'hours' ? Infinity : 59;
    const validValue = Math.max(0, Math.min(numValue, maxValue));

    if (type === 'current') {
      setCurrentTime(prev => ({ ...prev, [field]: validValue }));
    } else {
      setTotalTime(prev => ({ ...prev, [field]: validValue }));
    }
  };

  // 处理输入框焦点
  const handleFocus = (type: 'current' | 'total', field: keyof TimeInput, value: number | null) => {
    if (value === 0) {
      if (type === 'current') {
        setCurrentTime(prev => ({ ...prev, [field]: null }));
      } else {
        setTotalTime(prev => ({ ...prev, [field]: null }));
      }
    }
  };

  // 处理输入框失焦
  const handleBlur = (type: 'current' | 'total', field: keyof TimeInput, value: number | null) => {
    if (value === null) {
      if (type === 'current') {
        setCurrentTime(prev => ({ ...prev, [field]: 0 }));
      } else {
        setTotalTime(prev => ({ ...prev, [field]: 0 }));
      }
    }
  };

  // 计算百分比和剩余时间
  const calculatePercentage = () => {
    const currentSeconds = timeToSeconds(currentTime);
    const totalSeconds = timeToSeconds(totalTime);

    if (totalSeconds === 0) {
      setPercentage(0);
      return;
    }

    // 计算百分比，限制在0-100之间
    const calculatedPercentage = Math.min(100, Math.max(0, (currentSeconds / totalSeconds) * 100));
    setPercentage(calculatedPercentage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <SEO
        title="Audiobook Percentage Calculator"
        description="Track your audiobook progress quickly and easily with our Audiobook Percentage Calculator. Enter your audiobook details and calculate how much you've completed in just seconds."
        canonicalUrl="https://playback-speed-calculator.com/audiobook-percentage"
      />

      {/* Introduction Section */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Audiobook Percentage Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Easily track your audiobook progress with our Audiobook Percentage Calculator. Simply input your audiobook details, and find out how much you've completed in seconds.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-8">
            {/* Current Time Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Play className="h-6 w-6 text-indigo-600" />
                Current Time
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Hours</label>
                  <input
                    type="number"
                    min="0"
                    value={currentTime.hours !== null ? currentTime.hours : ''}
                    onChange={(e) => handleInputChange('current', 'hours', e.target.value)}
                    onFocus={() => handleFocus('current', 'hours', currentTime.hours)}
                    onBlur={() => handleBlur('current', 'hours', currentTime.hours)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Minutes</label>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={currentTime.minutes !== null ? currentTime.minutes : ''}
                    onChange={(e) => handleInputChange('current', 'minutes', e.target.value)}
                    onFocus={() => handleFocus('current', 'minutes', currentTime.minutes)}
                    onBlur={() => handleBlur('current', 'minutes', currentTime.minutes)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Seconds</label>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={currentTime.seconds !== null ? currentTime.seconds : ''}
                    onChange={(e) => handleInputChange('current', 'seconds', e.target.value)}
                    onFocus={() => handleFocus('current', 'seconds', currentTime.seconds)}
                    onBlur={() => handleBlur('current', 'seconds', currentTime.seconds)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Total Time Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="h-6 w-6 text-indigo-600" />
                Total Time
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Hours</label>
                  <input
                    type="number"
                    min="0"
                    value={totalTime.hours !== null ? totalTime.hours : ''}
                    onChange={(e) => handleInputChange('total', 'hours', e.target.value)}
                    onFocus={() => handleFocus('total', 'hours', totalTime.hours)}
                    onBlur={() => handleBlur('total', 'hours', totalTime.hours)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Minutes</label>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={totalTime.minutes !== null ? totalTime.minutes : ''}
                    onChange={(e) => handleInputChange('total', 'minutes', e.target.value)}
                    onFocus={() => handleFocus('total', 'minutes', totalTime.minutes)}
                    onBlur={() => handleBlur('total', 'minutes', totalTime.minutes)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Seconds</label>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={totalTime.seconds !== null ? totalTime.seconds : ''}
                    onChange={(e) => handleInputChange('total', 'seconds', e.target.value)}
                    onFocus={() => handleFocus('total', 'seconds', totalTime.seconds)}
                    onBlur={() => handleBlur('total', 'seconds', totalTime.seconds)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="flex justify-center">
              <button
                onClick={calculatePercentage}
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Calculate Progress
              </button>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <FastForward className="h-6 w-6 text-indigo-600" />
                Results
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Completion Percentage</p>
                  <p className="text-4xl font-bold text-indigo-600">{percentage.toFixed(1)}%</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Remaining Percentage</p>
                  <p className="text-4xl font-bold text-indigo-600">
                    {(100 - percentage).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 详细内容区域 */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-indigo max-w-none">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            Audiobook Percentage Calculator: Track Your Progress
          </h2>
          <p className="text-gray-600 mb-8">
            Many of us love getting lost in audiobooks. But, it can be hard to keep track of how far we've read. 
            That's where the Audiobook Percentage Calculator comes in. It makes it easy to see how much you've 
            listened to and helps you finish what you start.
          </p>

          <p className="text-gray-600 mb-8">
            This tool is a big help for audiobook fans. It keeps you on track and makes listening more fun. 
            You'll feel more connected to your stories and more likely to keep going.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Takeaways</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Audiobook Percentage Calculator is a tool that helps you track your progress as you listen to audiobooks.</li>
            <li>Monitoring your audiobook progress can keep you motivated and ensure you complete the books you start.</li>
            <li>The calculator provides an accurate and user-friendly interface to monitor your audiobook progress.</li>
            <li>Leveraging an Audiobook Percentage Calculator can enhance your overall reading experience.</li>
            <li>Integrating the calculator with other apps can further streamline your audiobook listening experience.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is an Audiobook Percentage Calculator?</h3>
          <p className="text-gray-600 mb-6">
            An audiobook percentage calculator is a handy tool. It lets you track how far you've listened in a book. 
            By seeing the percentage you've finished, you can set goals and stay on track.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Benefits of Tracking Your Audiobook Progress</h3>
          <p className="text-gray-600 mb-4">Using an audiobook percentage calculator has many perks:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>It keeps you motivated and focused.</li>
            <li>It helps you manage your time better.</li>
            <li>It gives you insights into your listening habits.</li>
            <li>It makes you feel accomplished when you finish a book.</li>
          </ul>

          <p className="text-gray-600 mb-8">
            Whether you listen to audiobooks a lot or just sometimes, using a audiobook percentage calculator can make 
            your experience better. It helps you enjoy your audiobooks even more.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How Does the Audiobook Percentage Calculator Work?</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-4">The Audiobook Percentage Calculator is a simple yet effective tool that provides instant results with just two inputs:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Total Length of Audiobook:</strong> Enter the full duration of the audiobook in hours and minutes.</li>
              <li><strong>Length Listened To:</strong> Enter the amount of time you've already listened to.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Once both values are entered, the calculator instantly shows your progress, displaying both the percentage 
              completed and the remaining percentage. It's an easy way to track exactly where you are in your audiobook journey!
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mathematical Formula</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-4">The calculation behind the Audiobook Percentage Calculator is simple:</p>
            <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <div className="min-w-full whitespace-nowrap font-mono text-sm">
                <p className="mb-2">Percentage Completed = (Length Listened To / Total Length) × 100</p>
                <p>Remaining Percentage = 100 - Percentage Completed</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">This makes it quick and easy to see how much you've completed and how much is left!</p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Audiobook Percentage Calculator FAQs</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What is an Audiobook Percentage Calculator?</h4>
              <p className="text-gray-600">An Audiobook Percentage Calculator is a tool that lets you track your audiobook progress. You input the total length of the audiobook. Then, you update it each time you listen to a part. This helps you stay motivated and focused.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What are the benefits of tracking my audiobook progress?</h4>
              <p className="text-gray-600">Tracking your audiobook progress helps you understand your listening habits. It ensures you finish the books you start. Plus, it keeps you motivated throughout.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How do I use an Audiobook Percentage Calculator?</h4>
              <p className="text-gray-600">Using an Audiobook Percentage Calculator is easy. Just input the audiobook's total length. Then, update it each time you listen to a part. This shows you the percentage of the book you've completed.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What features should I look for in an Audiobook Percentage Calculator?</h4>
              <p className="text-gray-600">Look for features like accurate progress tracking and a user-friendly interface. These ensure the information is reliable and easy to update.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do I need to create an account to use the Audiobook Percentage Calculator?</h4>
              <p className="text-gray-600">No, the calculator is free to use without registration.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a limit to the audiobook length I can enter?</h4>
              <p className="text-gray-600">No, you can input any audiobook length, making the tool ideal for both short and long listens.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I use the calculator on my mobile device?</h4>
              <p className="text-gray-600">Yes, the Audiobook Percentage Calculator is mobile-friendly and can be accessed on any device.</p>
            </div>
          </div>
        </div>

        <footer className="bg-white mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-500 text-sm">
              {new Date().getFullYear()} Playback Speed Calculator. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default AudiobookPercentage;