import React from 'react';
import { ArrowDown, TrendingUp, DollarSign, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-900/20 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500 mb-4 tracking-wider">
              GARRETT PARKER
            </h1>
            <div className="text-2xl md:text-3xl font-light text-yellow-400 mb-2">
              Digital Marketing Powerhouse
            </div>
          </div>

          {/* Main headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            $2.1M+ in Organic Reach Value:
            <span className="block text-red-500">Building Digital Empires from Zero Ad Spend</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            A decade of proven expertise in 
            <span className="text-red-500 font-semibold"> viral content creation</span>, 
            <span className="text-yellow-400"> community monetization</span>, and 
            <span className="text-red-500 font-semibold"> fan-driven revenue generation</span>.
            This isn't just social media—it's business architecture.
          </p>

          {/* Business Metrics showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-green-900/30 p-6 rounded-lg border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:scale-105">
              <DollarSign className="w-8 h-8 text-green-500 mb-2 mx-auto" />
              <div className="text-3xl font-bold text-green-500">$2.1M+</div>
              <div className="text-sm text-gray-400">Ad Value Equivalent</div>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-8 h-8 text-blue-500 mb-2 mx-auto" />
              <div className="text-3xl font-bold text-blue-500">47M+</div>
              <div className="text-sm text-gray-400">Tweet Impressions</div>
            </div>
            <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-yellow-500 mb-2 mx-auto" />
              <div className="text-3xl font-bold text-yellow-500">50K+</div>
              <div className="text-sm text-gray-400">Zero Ad Spend Followers</div>
            </div>
            <div className="bg-red-900/30 p-6 rounded-lg border border-red-500/30 hover:border-red-500 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-red-500">8.7%</div>
              <div className="text-sm text-gray-400">Avg. Engagement Rate</div>
              <div className="text-xs text-gray-500">(vs 3.2% industry)</div>
            </div>
          </div>

          {/* Revenue Impact Highlight */}
          <div className="bg-gray-800/30 rounded-2xl p-8 mb-8 border border-gray-600 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Revenue Impact at a Glance</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="text-green-500 font-bold">$217K+</div>
                <div className="text-white font-semibold">Ticket Sales Driven</div>
                <div className="text-gray-400 text-sm">Direct fan influence</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="text-blue-500 font-bold">3.4x</div>
                <div className="text-white font-semibold">Higher Conversion</div>
                <div className="text-gray-400 text-sm">vs. industry benchmarks</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="text-yellow-500 font-bold">19</div>
                <div className="text-white font-semibold">Viral Moments</div>
                <div className="text-gray-400 text-sm">Zero ad spend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
