"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-start items-stretch overflow-x-hidden">

      {/* Hero Section */}
      <section className="mt-36 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight drop-shadow-lg">
          Set Reminders. Time. <br />
          <span className="text-green-500">Get Alerts</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Learn by building real-world projects, guided by expert mentors. <br />
          Get job-ready with full career support.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/signup">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-green-400/70 transition hover:scale-105">
              Sign Up
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="#features"
        className="flex flex-col md:flex-row gap-6 mt-18 m-4 justify-between"
      >
        {/* Feature 1: Real-Time Messaging */}
        <div className="flex flex-col gap-4 rounded-lg p-2">
          <div className="bg-white min-w-[10rem] h-35 rounded-lg p-4 shadow-md flex items-center gap-3">
            <img
              className="w-10 h-10 rounded"
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80"
              alt="Real-Time Messaging"
            />
            <span className="text-2xl font-semibold text-[#46c890]">
              Real-Time Messaging
            </span>
          </div>
          <div className="bg-white min-w-[10rem] rounded-lg flex flex-col p-4 shadow-md">
            <span className="text-6xl text-[#46c890]">💬</span>
            <p className="text-gray-700 mt-2">
              Instantly send and receive messages, photos, and files. Enjoy seamless, live conversations across all your devices.
            </p>
            <img
              className="rounded w-20 h-20 inline-block p-3 border-2 border-gray-200"
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80"
              alt="Chat Bubble"
            />
          </div>
        </div>

        {/* Feature 2: Secure & Smart Communication */}
        <div className="flex flex-col gap-4 p-2">
          <div className="bg-white p-6 rounded-lg shadow-md text-center h-50 min-w-[25rem] flex flex-col items-center justify-center">
            <img
              className="w-16 h-16 mb-3 rounded"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
              alt="Encryption"
            />
            <span className="text-xl font-semibold text-[#46c890]">
              End-to-End Encryption
            </span>
            <p className="text-gray-700 mt-2">
              Your conversations stay private and secure with industry-leading encryption.
            </p>
          </div>
          <div className="flex flex-row gap-4 h-50">
            <div className="rounded-lg bg-white p-4 shadow-md w-full text-center flex flex-col items-center">
              <img
                className="w-10 h-10 mx-auto mb-2 rounded"
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80"
                alt="Chat Analytics"
              />
              <span className="font-semibold text-[#46c890]">Chat Analytics</span>
              <p className="text-gray-700 text-sm">
                Track message delivery, read receipts, and engagement stats.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md w-full text-center flex flex-col items-center">
              <img
                className="w-10 h-10 mx-auto mb-2 rounded"
                src="https://images.unsplash.com/photo-1517263904808-5dc0a0f3a7a6?auto=format&fit=crop&w=400&q=80"
                alt="Voice & Video Calls"
              />
              <span className="font-semibold text-[#46c890]">
                Voice & Video Calls
              </span>
              <p className="text-gray-700 text-sm">
                Connect face-to-face with high-quality voice and video calls.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3: Customizable & Organized */}
        <div className="bg-white rounded-lg p-4 shadow-md min-w-[20rem] text-center flex flex-col items-center">
          <img
            className="w-14 h-14 mx-auto mb-3 rounded"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
            alt="Customization"
          />
          <span className="text-xl font-semibold text-[#46c890]">
            Personalized Experience
          </span>
          <p className="text-gray-700 mt-2">
            Organize chats with channels, groups, and themes. Customize your chat app to fit your style and workflow.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
