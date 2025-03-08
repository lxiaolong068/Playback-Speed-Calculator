import React from 'react';
import { Info, Book, Clock, Github } from 'lucide-react';
import { SEO } from './components/SEO';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <SEO
        title="About Playback Speed Calculator"
        description="Learn about the Playback Speed & Audiobook Progress Calculator - a tool designed to help you optimize your listening experience and track your audiobook progress."
        canonicalUrl="https://playback-speed-calculator.com/about"
      />

      {/* Introduction Section */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">About This Project</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern tool designed to enhance your audio and video experience by calculating playback speeds and tracking audiobook progress.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-10">
          {/* Project Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <Info className="h-6 w-6 text-indigo-600" />
              Project Overview
            </h2>
            <p className="text-gray-700">
              The Playback Speed & Audiobook Progress Calculator is a web application built to help users optimize their listening and viewing experience. Whether you're trying to save time by increasing playback speed or tracking your progress through an audiobook, our tools make it simple and intuitive.
            </p>
            <p className="text-gray-700">
              This project was developed using modern web technologies including React, TypeScript, and Tailwind CSS, ensuring a responsive and user-friendly experience across all devices.
            </p>
          </section>

          {/* Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <Clock className="h-6 w-6 text-indigo-600" />
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-indigo-700 mb-2">Playback Speed Calculator</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Calculate adjusted duration based on playback speed</li>
                  <li>Real-time calculation of time saved</li>
                  <li>Support for hours, minutes, and seconds</li>
                  <li>Preset speed buttons for quick adjustments</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-indigo-700 mb-2">Audiobook Percentage Calculator</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Track your progress through audiobooks</li>
                  <li>Calculate completion percentage</li>
                  <li>Visualize remaining time</li>
                  <li>Easy-to-use time input fields</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Stack */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <Book className="h-6 w-6 text-indigo-600" />
              Technical Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="font-medium text-gray-900">React 18</div>
                <div className="text-sm text-gray-500">Frontend Framework</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="font-medium text-gray-900">TypeScript</div>
                <div className="text-sm text-gray-500">Language</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="font-medium text-gray-900">Tailwind CSS</div>
                <div className="text-sm text-gray-500">Styling</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="font-medium text-gray-900">Vite</div>
                <div className="text-sm text-gray-500">Build Tool</div>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <Github className="h-6 w-6 text-indigo-600" />
              Open Source
            </h2>
            <p className="text-gray-700">
              This project is open source and available on GitHub. Contributions, suggestions, and feedback are always welcome. If you find this tool useful, consider giving it a star on GitHub or sharing it with others who might benefit from it.
            </p>
            <div className="flex justify-center pt-4">
              <a 
                href="https://github.com/lxiaolong068/Playback-Speed-Calculator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;