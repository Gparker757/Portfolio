
import React from 'react';
import { ArrowRight, Play, Users, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  const viralMoments = [
    {
      title: 'The Vine That Started It All',
      subtitle: 'Welcome to Forever Era (2014)',
      description: 'Revolutionary 6-second clip that introduced Logic to millions and coined "RattPack Forever." This single piece of content became the foundation of Logic\'s digital army.',
      metrics: [
        { label: 'Total Loops', value: '28.2M', icon: Play },
        { label: 'Likes', value: '281.5K', icon: Users },
        { label: 'Revines', value: '227.8K', icon: TrendingUp },
        { label: 'Career Impact', value: 'Legendary', icon: ArrowRight }
      ],
      tags: ['Vine Pioneer', 'Career Defining', 'Cultural Impact'],
      gradient: 'from-green-600 to-teal-500',
      year: '2014'
    },
    {
      title: 'I Don\'t F*** With Nobody',
      subtitle: 'The Soundset Interview Moment (2015)',
      description: 'Captured Logic\'s raw interview moment that became a career-defining tagline. This clip crystallized Logic\'s authenticity and became viral shorthand for his personality.',
      metrics: [
        { label: 'Total Views', value: '2.6M', icon: Play },
        { label: 'Cultural Penetration', value: 'Massive', icon: TrendingUp },
        { label: 'Meme Status', value: 'Achieved', icon: Users },
        { label: 'Quote Recognition', value: '100%', icon: ArrowRight }
      ],
      tags: ['Viral Quote', 'Personality Capture', 'Meme Genesis'],
      gradient: 'from-blue-600 to-purple-600',
      year: '2015'
    },
    {
      title: 'Blindfolded Rubik\'s Cube Freestyle',
      subtitle: 'The Incredible True Story Rollout (2015)',
      description: 'Strategic content drop during TITS album cycle showcasing Logic\'s unique talents. Perfectly timed viral moment that demonstrated both his rap skills and intellectual prowess.',
      metrics: [
        { label: 'Tweet Views', value: '11.7M', icon: Play },
        { label: 'Album Cycle Boost', value: 'Significant', icon: TrendingUp },
        { label: 'Skill Demonstration', value: 'Perfect', icon: Users },
        { label: 'Timing', value: 'Masterful', icon: ArrowRight }
      ],
      tags: ['Strategic Timing', 'Skill Showcase', 'Album Promotion'],
      gradient: 'from-purple-600 to-pink-600',
      year: '2015'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Viral Moments: Setting the Internet on Fire
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From a 6-second Vine to career-defining quotes—witness the strategic viral moments that built Logic's digital empire
          </p>
        </div>

        <div className="space-y-12">
          {viralMoments.map((moment, index) => (
            <div key={index} className="group">
              <div className="bg-black/50 rounded-3xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${moment.gradient} text-white font-bold text-lg`}>
                        {moment.year}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {moment.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-700 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {moment.title}
                    </h3>
                    <h4 className={`text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r ${moment.gradient}`}>
                      {moment.subtitle}
                    </h4>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {moment.description}
                    </p>
                    
                    <button className={`flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all duration-300 bg-gradient-to-r ${moment.gradient} px-6 py-3 rounded-full`}>
                      View Impact Analysis
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Metrics */}
                  <div className="lg:w-80">
                    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-600">
                      <h4 className="text-lg font-bold text-white mb-4">Viral Metrics</h4>
                      <div className="space-y-4">
                        {moment.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <metric.icon className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${moment.gradient}`} />
                              <span className="text-gray-400 text-sm">{metric.label}</span>
                            </div>
                            <span className={`font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r ${moment.gradient}`}>
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-black/50 rounded-3xl p-12 border border-red-500/30 backdrop-blur-sm text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            The Science of Viral Fandom
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Each viral moment was strategically timed, authentically captured, and perfectly executed. This is what happens when a fan treats content creation like a startup.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">42.5M+</div>
              <div className="text-gray-400">Combined Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Cultural Impact</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">∞</div>
              <div className="text-gray-400">Career Influence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
