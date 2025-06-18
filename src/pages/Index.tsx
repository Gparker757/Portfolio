import React from 'react';
import Hero from '../components/Hero';
import ROIDashboard from '../components/ROIDashboard';
import ViralBreakdowns from '../components/ViralBreakdowns';
import Timeline from '../components/Timeline';
import PlatformAchievements from '../components/PlatformAchievements';
import Testimonials from '../components/Testimonials';
import LiveFeed from '../components/LiveFeed';
import garrettPhoto from '../assets/garrett-parker.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      {/* About Me Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto h-full">
            <img
              src={garrettPhoto}
              alt="Garrett Parker"
              className="rounded-2xl shadow-2xl border-4 border-gray-800 w-40 h-40 md:w-64 md:h-[340px] object-cover mb-6 md:mb-0 md:mr-8"
              style={{ maxHeight: '100%', height: 'auto' }}
            />
          </div>
          <div className="max-w-2xl mx-auto md:mx-0 flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              About Me
            </h2>
            <p className="text-lg text-gray-200 mb-4">
              I'm Garrett Parker — a digital strategist, creative builder, and culture shaper with over 10 years of experience in social media, fan engagement, and online community development.
            </p>
            <p className="text-lg text-gray-200 mb-4">
              Back in the early 2010s, I created two of the most influential fan accounts in hip-hop and music: <span className="font-semibold text-white">@RattPackForever</span> on Instagram and <span className="font-semibold text-white">@LinesofLogic</span> on Twitter — dedicated to the rapper Logic. These weren't just fan pages. They became movement hubs. I organically grew these platforms to tens of thousands of followers, generating millions of impressions and playing a direct role in some of Logic's biggest album rollouts like Everybody, YSIV, and Ultra 85.
            </p>
            <p className="text-lg text-gray-200 mb-4">
              My pages were among the first to turn fan engagement into cultural momentum. Whether it was leading viral campaigns, creating high-impact content, or cultivating a passionate community, I helped shape Logic's online narrative — long before labels figured out how to harness fanbases at scale.
            </p>
            <p className="text-lg text-gray-200">
              This portfolio is just a snapshot of what I've done — and where I'm going next. If you're looking for someone who truly understands the intersection of community, creativity, and culture, you're in the right place.
            </p>
          </div>
        </div>
      </section>
      <ROIDashboard />
      <ViralBreakdowns />
      <Timeline />
      <PlatformAchievements />
      <Testimonials />
      <LiveFeed />
    </div>
  );
};

export default Index;
