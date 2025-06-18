import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Target, BarChart3, PieChart } from 'lucide-react';

const ROIDashboard = () => {
  const [viewMode, setViewMode] = useState<'vanity' | 'business'>('business');

  const businessMetrics = [
    {
      title: 'Direct Revenue Impact',
      value: '$217K+',
      description: 'Ticket sales driven through fan influence',
      growth: '+340%',
      icon: DollarSign,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Ad Value Equivalent',
      value: '$2.1M+',
      description: 'Organic reach value vs. paid campaigns',
      growth: '+2,100%',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Conversion Rate',
      value: '8.7%',
      description: 'Fan-to-customer conversion (vs 3.2% industry)',
      growth: '+171%',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Community Value',
      value: '$8.6K+',
      description: 'Tracked merch & VIP upsells via DMs',
      growth: '+860%',
      icon: Users,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const vanityMetrics = [
    {
      title: 'Total Impressions',
      value: '100M+',
      description: 'Across all platforms and campaigns',
      growth: '+4,700%',
      icon: BarChart3,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Vine Loops',
      value: '28.2M',
      description: 'Single viral moment impact. Accomplished in 2014 before virality on Social Media was common.',
      growth: '+28,200%',
      icon: PieChart,
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Followers',
      value: '150K+',
      description: 'Zero ad spend, organic growth',
      growth: '+5,000%',
      icon: Users,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Engagement Rate',
      value: '8.7%',
      description: 'Consistently above industry average',
      growth: '+171%',
      icon: Target,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const currentMetrics = viewMode === 'business' ? businessMetrics : vanityMetrics;

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white">
            The ROI of Fandom: Data That Matters
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Every like, share, and comment translated into measurable business impact. 
            This is what happens when passion meets performance marketing.
          </p>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-full p-1 flex">
              <button
                onClick={() => setViewMode('business')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  viewMode === 'business'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                💰 Business Impact
              </button>
              <button
                onClick={() => setViewMode('vanity')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  viewMode === 'vanity'
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                📊 Reach Metrics
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {currentMetrics.map((metric, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-105 backdrop-blur-sm h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-6`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className={`text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}>
                  {metric.value}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{metric.title}</h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Tool */}
        <div className="bg-gradient-to-r from-gray-800/50 to-green-900/20 rounded-3xl p-12 border border-gray-700 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Organic vs. Paid: The Efficiency Advantage
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500/20 rounded-2xl p-6 border border-green-500/30">
                <h4 className="text-green-400 font-bold text-lg mb-2">Organic Reach (Garrett)</h4>
                <div className="text-3xl font-bold text-white mb-2">$2.1M</div>
                <div className="text-sm text-gray-400">Value generated</div>
                <div className="text-xs text-green-400 mt-2">$0 ad spend</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🆚</div>
              <div className="text-white font-semibold">Cost Efficiency</div>
              <div className="text-green-400 text-2xl font-bold">∞% ROI</div>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500/20 rounded-2xl p-6 border border-red-500/30">
                <h4 className="text-red-400 font-bold text-lg mb-2">Typical Paid Campaign</h4>
                <div className="text-3xl font-bold text-white mb-2">$2.1M</div>
                <div className="text-sm text-gray-400">Same reach cost</div>
                <div className="text-xs text-red-400 mt-2">$350K+ ad spend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIDashboard;
