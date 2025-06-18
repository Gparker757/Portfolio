import React from 'react';
import { Instagram, Twitter, Globe } from 'lucide-react';

const PlatformAchievements = () => {
  const platforms = [
    {
      name: 'Twitter/X Ecosystem',
      handles: '@LinesofLogic (2012) | @RattPack (2017)',
      icon: Twitter,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        {
          title: '10M+ Average Impressions',
          stat: '10M+',
          description: 'Average impressions per album cycle across all major releases.'
        },
        {
          title: '80K+ Combined Followers Organically',
          stat: '80K+',
          description: 'Combined organic followers across all Twitter/X accounts.'
        },
        {
          title: 'Most Trusted News Source for Fans',
          stat: 'Top',
          description: 'Recognized as the most reliable and timely news source for Logic fans.'
        },
        {
          title: 'Tour Cycle Analytics',
          stat: '5.6M+',
          description: 'Analytics and engagement during Logic\'s major tour cycles.'
        }
      ],
      highlights: [
        'Secured @RattPack username in 2017',
        'First centralized Logic news hub (2012)',
        'Peak of 21.8M impressions during TITS',
        'Official Logic team recognition'
      ]
    },
    {
      name: 'Instagram Empire',
      handles: '@RattPackForever',
      icon: Instagram,
      color: 'from-purple-600 to-pink-600',
      achievements: [
        {
          title: 'Organic Growth',
          stat: '49.5K',
          description: 'Followers built through authentic content and community engagement'
        },
        {
          title: 'Content Archive',
          stat: '2,374',
          description: 'Posts documenting Logic\'s entire career journey'
        },
        {
          title: 'Engagement Rate',
          stat: '8.5%+',
          description: 'Consistently high engagement through strategic storytelling'
        },
        {
          title: 'Story Impact',
          stat: '2M+',
          description: 'Monthly story views featuring exclusive behind-the-scenes content'
        }
      ],
      highlights: [
        'Comprehensive Logic career documentation',
        'Exclusive behind-the-scenes access',
        'Fan art and tribute curation',
        'Community-driven content strategy'
      ]
    },
    {
      name: 'Web Presence',
      handles: 'RattPackForever.com',
      icon: Globe,
      color: 'from-red-600 to-orange-500',
      achievements: [
        {
          title: 'Site Revival',
          stat: 'Complete',
          description: 'Filled the void after Mind of Logic shutdown'
        },
        {
          title: 'Content Hub',
          stat: 'Full',
          description: 'Discography, blog, and newsletter in one place'
        },
        {
          title: 'Community Center',
          stat: 'Active',
          description: 'Central hub for RattPack news and updates'
        },
        {
          title: 'Archive Depth',
          stat: '10+ Years',
          description: 'Complete historical documentation of Logic\'s career'
        }
      ],
      highlights: [
        'Complete discography documentation',
        'Regular blog updates and analysis',
        'Newsletter for community updates',
        'Historical archive preservation'
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
            Platform Dominance
          </h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {platforms.map((platform, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-500 backdrop-blur-sm">
                {/* Platform header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                    <p className={`text-lg text-transparent bg-clip-text bg-gradient-to-r ${platform.color}`}>
                      {platform.handles}
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Achievements grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {platform.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="bg-gray-800/50 p-4 rounded-xl border border-gray-600">
                        <div className={`text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r ${platform.color}`}>
                          {achievement.stat}
                        </div>
                        <div className="text-white font-semibold text-sm mb-2">
                          {achievement.title}
                        </div>
                        <div className="text-gray-400 text-xs leading-relaxed">
                          {achievement.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-600">
                    <h4 className="text-lg font-bold text-white mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {platform.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${platform.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformAchievements;
