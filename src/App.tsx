import React, { useState, useEffect } from 'react';
import { Clock, FastForward, Rewind, Play } from 'lucide-react';
import { SEO } from './components/SEO';

function App() {
  const [speed, setSpeed] = useState(1);
  const [hours, setHours] = useState<number | null>(0);
  const [minutes, setMinutes] = useState<number | null>(0);
  const [seconds, setSeconds] = useState<number | null>(0);
  const [adjustedTime, setAdjustedTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [timeSaved, setTimeSaved] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value));
  };

  const handleSpeedButtonClick = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  // 将时间转换为格式化字符串
  const formatTime = (time: { hours: number; minutes: number; seconds: number }) => {
    const pad = (num: number) => String(Math.floor(num)).padStart(2, '0');
    return `${pad(time.hours)}:${pad(time.minutes)}:${pad(time.seconds)}`;
  };

  // 将总秒数转换为时分秒对象
  const secondsToTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return { hours, minutes, seconds };
  };

  // 计算调整后的时间和节省的时间
  useEffect(() => {
    // 计算总秒数
    const totalSeconds = (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
    
    // 计算调整后的时间（秒）
    const adjustedSeconds = totalSeconds / speed;
    
    // 计算节省的时间（秒）：只在速度大于1时计算节省时间，否则为0
    const savedSeconds = speed > 1 ? totalSeconds - adjustedSeconds : 0;
    
    // 更新状态
    setAdjustedTime(secondsToTime(adjustedSeconds));
    setTimeSaved(secondsToTime(savedSeconds));
  }, [hours, minutes, seconds, speed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <SEO
        title="Playback Speed Calculator"
        description="Calculate the perfect playback speed for your audio and video files with our easy-to-use Playback Speed Calculator. Adjust speed, time, and duration for an optimized listening or viewing experience."
        canonicalUrl="https://playback-speed-calculator.com"
      />
      {/* Introduction Section */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Playback Speed Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Adjust audio and video playback speeds easily with our Playback Speed Calculator. Perfect for optimizing time and duration for an ideal listening experience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Calculator Section */}
          <div className="space-y-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="h-6 w-6 text-indigo-600" />
                Original Duration
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Hours</label>
                  <input
                    type="number"
                    min="0"
                    value={hours !== null ? hours : ''}
                    onChange={(e) => setHours(Math.max(0, parseInt(e.target.value) || 0))}
                    onFocus={(e) => hours === 0 && e.target.value === '0' && setHours(null)}
                    onBlur={(e) => e.target.value === '' && setHours(0)}
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
                    value={minutes !== null ? minutes : ''}
                    onChange={(e) => setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                    onFocus={(e) => minutes === 0 && e.target.value === '0' && setMinutes(null)}
                    onBlur={(e) => e.target.value === '' && setMinutes(0)}
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
                    value={seconds !== null ? seconds : ''}
                    onChange={(e) => setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                    onFocus={(e) => seconds === 0 && e.target.value === '0' && setSeconds(null)}
                    onBlur={(e) => e.target.value === '' && setSeconds(0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Speed Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Play className="h-6 w-6 text-indigo-600" />
                Playback Speed
              </h2>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0.25"
                  max="4"
                  step="0.25"
                  value={speed}
                  onChange={handleSpeedChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-lg font-medium text-gray-900 min-w-[4rem]">{speed.toFixed(2)}x</span>
              </div>
              <div className="flex justify-center space-x-2">
                {[0.5, 1, 1.5, 2, 2.5, 3].map((speedValue) => (
                  <button
                    key={speedValue}
                    onClick={() => handleSpeedButtonClick(speedValue)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      speed === speedValue
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {speedValue}x
                  </button>
                ))}
              </div>
            </div>

            {/* Result Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Rewind className="h-6 w-6 text-indigo-600" />
                New Duration
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-indigo-600">{formatTime(adjustedTime)}</p>
                  <p className="text-sm text-gray-600 mt-2">Adjusted duration at {speed}x speed</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-green-600">{formatTime(timeSaved)}</p>
                  <p className="text-sm text-gray-600 mt-2">Time saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 prose prose-indigo max-w-none">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            Playback Speed Calculator – Adjust Your Audio and Video Playback Effortlessly!
          </h2>
          <p className="text-gray-600 mb-8">
            In today's digital world, we face a lot of media content. This includes streaming videos and listening to podcasts. 
            Finding time and getting the most from our media can be hard. That's why the Playback Speed Calculator is here. 
            It helps you make the most of your media by changing playback speeds and saving time.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Takeaways</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>The Playback Speed Calculator helps you optimize your media consumption by adjusting playback speeds.</li>
            <li>It allows you to estimate time savings, enhancing your overall productivity.</li>
            <li>The tool enables you to tailor your media experience to your specific needs and preferences.</li>
            <li>Adjusting playback speed can improve comprehension and retention of content.</li>
            <li>The Playback Speed Calculator is a valuable resource for both casual media consumers and multimedia professionals.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is the Playback Speed Calculator?</h3>
          <p className="text-gray-600 mb-6">
            The Playback Speed Calculator is an easy-to-use tool that helps you adjust the speed of audio or video content. 
            Whether you're listening to an audiobook, podcast, or watching a video, this tool helps you calculate how long 
            it will take to finish at different speeds. You can even see how much time you save by speeding it up!
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Do You Need a Playback Speed Calculator?</h3>
          <p className="text-gray-600 mb-4">
            Ever wanted to finish an audiobook or podcast faster? Or maybe slow down a video to catch all the details? 
            The Playback Speed Calculator lets you do just that. With this tool, you can:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Save Time: Speed up audio or video and see exactly how much time you'll save.</li>
            <li>Optimize Your Listening or Viewing Experience: Adjust playback speed to suit your needs, whether you're learning something new or just enjoying content.</li>
            <li>Stay in Control: Get the most out of your time by tailoring the speed to match your pace.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Using the Playback Speed Calculator</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <ol className="list-decimal pl-6 space-y-4 text-gray-600">
              <li>
                <strong>Enter the Total Length:</strong>
                <p>Start by entering the length of your audio or video. Just fill in the Hours, Minutes, and Seconds based on how long it is.</p>
              </li>
              <li>
                <strong>Set the playback speed:</strong>
                <p>Move the slider to choose how fast or slow you want the playback to be. You can choose speeds from 0.25x (slower) to 5x (faster). The current speed will be shown below the slider.</p>
              </li>
              <li>
                <strong>View your results:</strong>
                <p>Once you've entered the total length and set the speed, the calculator will automatically show:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Listening Time: The tool will show you how long it will take to finish the content at your selected speed.</li>
                  <li>Time Saved: You'll also see how much time you save if you're listening at a faster speed.</li>
                </ul>
              </li>
            </ol>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mathematical Formula</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-4">The Playback Speed Calculator works by using simple math to figure out how long it will take to finish your audio or video at a certain speed. Here's how it does that:</p>
            
            <h4 className="font-semibold text-gray-900 mb-2">Total Length (in seconds):</h4>
            <p className="text-gray-600 mb-4">We first convert the total time of your audiobook or video into seconds. The formula is:</p>
            <pre className="bg-gray-100 p-4 rounded-md">Total Length (seconds) = (Hours × 3600) + (Minutes × 60) + Seconds</pre>

            <h4 className="font-semibold text-gray-900 mt-6 mb-2">Listening Time:</h4>
            <p className="text-gray-600 mb-4">To calculate the new time at your selected speed, we use this formula:</p>
            <pre className="bg-gray-100 p-4 rounded-md">Listening Time (seconds) = Total Length (seconds) / Playback Speed</pre>

            <h4 className="font-semibold text-gray-900 mt-6 mb-2">Time Saved:</h4>
            <p className="text-gray-600 mb-4">If you choose a faster speed, you'll save time. The formula for time saved is:</p>
            <pre className="bg-gray-100 p-4 rounded-md">Time Saved (seconds) = Total Length (seconds) − Listening Time (seconds)</pre>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Example</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-600 mb-4">Let's say you want to watch a 2-hour video at 1.5x speed:</p>
            <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <div className="min-w-full whitespace-nowrap font-mono text-sm">
                <p className="mb-2">Original Duration = 2:00:00 (2 hours)</p>
                <p className="mb-2">Playback Speed = 1.5x</p>
                <p className="mb-2">Adjusted Duration = Original Duration ÷ Playback Speed</p>
                <p className="mb-2">Adjusted Duration = 2:00:00 ÷ 1.5 = 1:20:00</p>
                <p>Time Saved = 2:00:00 - 1:20:00 = 0:40:00 (40 minutes)</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              By watching at 1.5x speed, you'll finish the video in 1 hour and 20 minutes, saving 40 minutes of your time!
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Playback Speed Calculator FAQs</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What is the Playback Speed Calculator?</h4>
              <p className="text-gray-600">The Playback Speed Calculator is a tool that lets you change the speed of videos, audio, and text. It helps you watch and listen to things faster or slower. This makes your media time more efficient and enjoyable.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What are the benefits of using the Playback Speed Calculator?</h4>
              <p className="text-gray-600">It saves time for creators and boosts productivity. It helps students learn better and faster. It also makes media more accessible for people with different needs.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What types of content can I use this calculator for?</h4>
              <p className="text-gray-600">You can use it for audiobooks, podcasts, videos, or any audio or video file where playback speed can be adjusted.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What speeds can I choose?</h4>
              <p className="text-gray-600">You can choose playback speeds from 0.25x (slower) to 5x (faster), giving you full control over how fast or slow the content plays.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How do I calculate the time saved?</h4>
              <p className="text-gray-600">The calculator does this for you! Just enter the total length and choose your speed, and it will show you the time saved at faster speeds.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Does this work for any length of audio or video?</h4>
              <p className="text-gray-600">Yes! Whether your file is just a few minutes long or several hours, the calculator can handle any duration.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I use this on my phone or tablet?</h4>
              <p className="text-gray-600">Absolutely! The Playback Speed Calculator is mobile-friendly, so you can use it on any device.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            {new Date().getFullYear()} Playback Speed Calculator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;