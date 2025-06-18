import React from 'react';
import { Play, TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';
import SimulatorModal from './ui/SimulatorModal';
import vineScreenshot from '../assets/vine-2014-screenshot.jpg';

const ViralBreakdowns = () => {
  const [simOpen, setSimOpen] = React.useState(false);
  const campaigns = [
    {
      title: 'The Vine That Broke Logic',
      subtitle: 'Welcome to Forever Era (2014)',
      description: 'Strategic leveraging of Vine\'s discovery engine to introduce Logic to millions. This wasn\'t luck—it was understanding platform psychology.',
      impact: '28.2M loops → First major viral moment for Logic\'s career',
      metrics: {
        reach: '28.2M',
        engagement: '281.5K',
        conversion: '227.8K',
        roi: 'Career-defining'
      },
      algorithm: [
        'Posted during peak Vine hours (7-9 PM EST)',
        'Used trending audio with original video content',
        'Leveraged hashtag momentum (#WelcomeToForever)',
        'Cross-promoted on Twitter for amplification'
      ],
      gradient: 'from-green-500 to-teal-600',
      year: '2014'
    },
    {
      title: 'The Tweet That Became a Slogan',
      subtitle: '"I Don\'t F*** With Nobody" (2015)',
      description: 'Real-time trend-jacking during a live interview. Captured an authentic moment and turned it into Logic\'s most-quoted phrase through strategic timing.',
      impact: '2.6M views → Now a Logic trademark phrase',
      metrics: {
        reach: '2.6M',
        engagement: '420K',
        conversion: '1.2M',
        roi: 'Brand Identity'
      },
      algorithm: [
        'Live-tweeted during peak engagement window',
        'Used controversial keywords for algorithm boost',
        'Created quote cards for shareability',
        'Coordinated fan account amplification'
      ],
      gradient: 'from-blue-500 to-purple-600',
      year: '2015'
    },
    {
      title: 'Rubik\'s Cube Freestyle Tweet',
      subtitle: 'The Incredible True Story Rollout (2015)',
      description: 'Perfectly timed content drop during album cycle. Showcased Logic\'s unique talents while driving massive engagement during critical promotional period.',
      impact: '11.7M views → Outperformed Logic\'s own posts',
      metrics: {
        reach: '11.7M',
        engagement: '890K',
        conversion: '2.1M',
        roi: 'Album Boost'
      },
      algorithm: [
        'Timed with album announcement buzz',
        'Used video format for higher engagement',
        'Leveraged trending #Blindfolded hashtag',
        'Created shareable skill demonstration'
      ],
      gradient: 'from-purple-500 to-pink-600',
      year: '2015'
    }
  ];

  const campaignLinks = [
    null,
    'https://x.com/LinesofLogic/status/610555065863143424?t=cqU-oYODTNCEM_-vWyQ9hw',
    'https://x.com/LinesofLogic/status/667481748943581185?t=4PZNXgWPfZErGPwRG4mzNg',
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Viral Campaign Breakdowns: Proving I "Get" Algorithms
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every viral moment was engineered, not accidental. Here's the strategic breakdown of how to hack platform algorithms and human psychology.
          </p>
        </div>

        <div className="space-y-16">
          {campaigns.map((campaign, index) => (
            <div key={index} className="group">
              <div className="bg-black/50 rounded-3xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-500 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Campaign Overview */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${campaign.gradient} text-white font-bold text-lg`}>
                        {campaign.year}
                      </div>
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        VIRAL CASE STUDY
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {campaign.title}
                    </h3>
                    <h4 className={`text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r ${campaign.gradient}`}>
                      {campaign.subtitle}
                    </h4>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {campaign.description}
                    </p>
                    
                    <div className={`bg-gradient-to-r ${campaign.gradient} bg-opacity-20 rounded-xl p-4 border-l-4 border-gradient-to-b ${campaign.gradient}`}>
                      <p className="text-white font-semibold">{campaign.impact}</p>
                    </div>

                    {index === 0 && (
                      <div className="my-6 flex flex-col items-center">
                        <img src={vineScreenshot} alt="2014 Vine Screenshot" className="rounded-xl border border-gray-700 max-w-full w-[350px]" />
                        <div className="text-gray-400 text-sm mt-2">Peace, love & positivity (Vine, 2014)</div>
                      </div>
                    )}
                    {index === 1 && campaignLinks[1] && (
                      <div className="my-6 flex flex-col items-center">
                        <a href={campaignLinks[1]} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md">View Tweet</a>
                      </div>
                    )}
                    {index === 2 && campaignLinks[2] && (
                      <div className="my-6 flex flex-col items-center">
                        <a href={campaignLinks[2]} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md">View Tweet</a>
                      </div>
                    )}
                  </div>

                  {/* Algorithm Strategy */}
                  <div className="space-y-8">
                    {/* Metrics */}
                    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-600">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5" />
                        Performance Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-white">{campaign.metrics.reach}</div>
                          <div className="text-sm text-gray-400">Total Reach</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-400">{campaign.metrics.engagement}</div>
                          <div className="text-sm text-gray-400">Engagements</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">{campaign.metrics.conversion}</div>
                          <div className="text-sm text-gray-400">Shares/Saves</div>
                        </div>
                        <div>
                          <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${campaign.gradient}`}>
                            {campaign.metrics.roi}
                          </div>
                          <div className="text-sm text-gray-400">ROI Impact</div>
                        </div>
                      </div>
                    </div>

                    {/* Algorithm Hacks */}
                    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-600">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Algorithm Strategy
                      </h4>
                      <ul className="space-y-3">
                        {campaign.algorithm.map((hack, hackIndex) => (
                          <li key={hackIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${campaign.gradient} mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-300 text-sm leading-relaxed">{hack}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default ViralBreakdowns;
