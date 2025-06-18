import React from 'react';
import gif44ever from '../assets/44ever-music-video.gif';
import gifSinatra from '../assets/all-sinatra-everything.gif';
import img2012tweet from '../assets/linesoflogic-2012-tweet.jpg';
import imgRubiks2015 from '../assets/rubiks-cube-tweet-2015.jpg';
import imgVine2014 from '../assets/vine-2014-screenshot.jpg';
import imgBobbyBoy2023 from '../assets/bobby-boy-comics-2023.jpg';
import imgRattPack2017 from '../assets/rattpack-handle-2017.jpg';
import img1800Report from '../assets/1800-impact-report.jpg';
import imgTITS2015 from '../assets/tits-cycle-analytics-2015.jpg';

const Timeline = () => {
  const milestones = [
    {
      year: '2012',
      title: '@LinesofLogic is Born',
      description: 'First centralized Logic news hub during Young Sinatra era',
      impact: 'Foundation of Logic\'s digital community',
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2014',
      title: 'The Vine That Changed Everything',
      description: '28.2M loop viral moment coining "RattPack Forever"',
      impact: '281.5K likes, 227.8K revines - Logic introduced to millions',
      color: 'from-green-500 to-teal-600'
    },
    {
      year: '2015',
      title: 'Peak Viral Era',
      description: '"I Don\'t F*** With Nobody" + Rubik\'s Cube Freestyle',
      impact: '2.6M + 11.7M views - Career-defining content',
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2015',
      title: 'TITS Cycle Domination',
      description: 'Strategic content during The Incredible True Story rollout',
      impact: '21.8M impressions - Peak engagement period',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      year: '2017',
      title: '@RattPack Handle Secured',
      description: 'Official community handle acquisition + Logic recognition',
      impact: 'Official brand validation',
      color: 'from-white to-gray-300'
    },
    {
      year: '2017-2018',
      title: 'Mental Health Campaign for 1-800',
      description: 'Spearheaded the official mental health campaign for Logic\'s song "1-800" including helping propel the song\'s success on the night of the 2017 VMAs, where Logic\'s performance went viral and the world was exposed to the song for the first time.',
      impact: 'Viral VMA moment, global awareness, and chart-topping success',
      color: 'from-green-400 to-blue-500'
    },
    {
      year: '2019',
      title: 'All Sinatra Everything Event',
      description: 'First Logic fan-experience event (NYC, sold-out)',
      impact: 'Steve Blum collaboration - Digital to IRL success',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      year: '2023',
      title: 'Bobby Boy Records & Comics',
      description: 'Collaborated with Logic\'s label, Bobby Boy Records, to expand brand initiatives, including the successful launch and sale of a comic book through Bobby Boy Comics.',
      impact: 'Expanded artist brand into publishing and new media',
      color: 'from-red-500 to-pink-600'
    },
    {
      year: '2024',
      title: 'Ultra 85 & 44ever Music Video',
      description: 'Played a leading role in the promotion of Logic\'s Ultra 85 album by starring in the "44ever" music video and being featured in the official documentary chronicling its creation and impact.',
      impact: 'Major role in album promotion and documentary feature',
      color: 'from-red-500 to-yellow-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
            2012-2024: The Fandom Architecture Timeline
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            From first tweet to sold-out events - witness the strategic milestones that built Logic's digital empire from the ground up
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-white to-red-500"></div>

          {/* Mobile timeline line - visible only on mobile */}
          <div className="md:hidden absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-white to-red-500"></div>

          {milestones.map((milestone, index) => (
            <div key={`${milestone.year}-${index}`} className="relative mb-12 md:mb-16">
              {/* Desktop layout - alternating left/right */}
              <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-white z-10 shadow-lg"></div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className={`text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${milestone.color}`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{milestone.description}</p>
                    <div className="bg-red-900/30 p-3 rounded-lg border-l-4 border-red-500 mb-4">
                      <p className="text-red-400 font-semibold text-sm">Impact: {milestone.impact}</p>
                    </div>
                    {/* Embed image for 2012 milestone */}
                    {milestone.year === '2012' && (
                      <div className="flex justify-center mt-4">
                        <img src={img2012tweet} alt="First Lines of Logic tweet 2012" className="rounded-xl shadow-lg max-w-full w-[320px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2014 Vine That Changed Everything milestone */}
                    {milestone.year === '2014' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgVine2014} alt="Vine That Broke Logic Screenshot 2014" className="rounded-xl shadow-lg max-w-full w-[320px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2015 Peak Viral Era milestone */}
                    {milestone.year === '2015' && milestone.title === 'Peak Viral Era' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgRubiks2015} alt="Rubik's Cube Tweet 2015" className="rounded-xl shadow-lg max-w-full w-[320px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2015 TITS Cycle Domination milestone */}
                    {milestone.year === '2015' && milestone.title === 'TITS Cycle Domination' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgTITS2015} alt="TITS Cycle Analytics 2015" className="rounded-xl shadow-lg max-w-full w-[320px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2017 @RattPack Handle Secured milestone */}
                    {milestone.year === '2017' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgRattPack2017} alt="RattPack Handle Acquired 2017" className="rounded-xl shadow-lg max-w-full w-[320px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2017-2018 Mental Health Campaign for 1-800 milestone */}
                    {milestone.year === '2017-2018' && (
                      <div className="flex justify-center mt-4">
                        <img src={img1800Report} alt="1-800-273-8255 Impact Report" className="rounded-xl shadow-lg max-w-full w-[320px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2023 Bobby Boy Records & Comics milestone */}
                    {milestone.year === '2023' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgBobbyBoy2023} alt="Bobby Boy Comics 2023" className="rounded-xl shadow-lg max-w-full w-[320px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed GIF for 2019 milestone */}
                    {milestone.year === '2019' && (
                      <div className="flex justify-center mt-4">
                        <img src={gifSinatra} alt="All Sinatra Everything Event" className="rounded-xl shadow-lg max-w-full w-[320px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed GIF for 2024 milestone */}
                    {milestone.year === '2024' && (
                      <div className="flex justify-center mt-4">
                        <img src={gif44ever} alt="Starring in Logic's 44ever music video" className="rounded-xl shadow-lg max-w-full w-[320px] border border-gray-700" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile layout - single column */}
              <div className="md:hidden flex items-start">
                {/* Timeline node */}
                <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white z-10 shadow-lg mt-2 flex-shrink-0"></div>

                {/* Content card */}
                <div className="ml-6 flex-1">
                  <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm">
                    <div className={`text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${milestone.color}`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{milestone.description}</p>
                    <div className="bg-red-900/30 p-3 rounded-lg border-l-4 border-red-500 mb-4">
                      <p className="text-red-400 font-semibold text-xs">Impact: {milestone.impact}</p>
                    </div>
                    {/* Embed image for 2012 milestone on mobile */}
                    {milestone.year === '2012' && (
                      <div className="flex justify-center mt-4">
                        <img src={img2012tweet} alt="First Lines of Logic tweet 2012" className="rounded-xl shadow-lg max-w-full w-[220px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2014 Vine That Changed Everything milestone on mobile */}
                    {milestone.year === '2014' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgVine2014} alt="Vine That Broke Logic Screenshot 2014" className="rounded-xl shadow-lg max-w-full w-[220px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2015 Peak Viral Era milestone on mobile */}
                    {milestone.year === '2015' && milestone.title === 'Peak Viral Era' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgRubiks2015} alt="Rubik's Cube Tweet 2015" className="rounded-xl shadow-lg max-w-full w-[220px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2015 TITS Cycle Domination milestone on mobile */}
                    {milestone.year === '2015' && milestone.title === 'TITS Cycle Domination' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgTITS2015} alt="TITS Cycle Analytics 2015" className="rounded-xl shadow-lg max-w-full w-[220px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2017 @RattPack Handle Secured milestone on mobile */}
                    {milestone.year === '2017' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgRattPack2017} alt="RattPack Handle Acquired 2017" className="rounded-xl shadow-lg max-w-full w-[220px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2017-2018 Mental Health Campaign for 1-800 milestone on mobile */}
                    {milestone.year === '2017-2018' && (
                      <div className="flex justify-center mt-4">
                        <img src={img1800Report} alt="1-800-273-8255 Impact Report" className="rounded-xl shadow-lg max-w-full w-[220px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed image for 2023 Bobby Boy Records & Comics milestone on mobile */}
                    {milestone.year === '2023' && (
                      <div className="flex justify-center mt-4">
                        <img src={imgBobbyBoy2023} alt="Bobby Boy Comics 2023" className="rounded-xl shadow-lg max-w-full w-[220px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed GIF for 2019 milestone on mobile */}
                    {milestone.year === '2019' && (
                      <div className="flex justify-center mt-4">
                        <img src={gifSinatra} alt="All Sinatra Everything Event" className="rounded-xl shadow-lg max-w-full w-[220px] border border-gray-700" />
                      </div>
                    )}
                    {/* Embed GIF for 2024 milestone on mobile */}
                    {milestone.year === '2024' && (
                      <div className="flex justify-center mt-4">
                        <img src={gif44ever} alt="Starring in Logic's 44ever music video" className="rounded-xl shadow-lg max-w-full w-[220px] border border-gray-700" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-black/50 rounded-3xl p-8 md:p-12 border border-red-500/30 backdrop-blur-sm text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            12 Years of Strategic Fandom Building
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">100M+</div>
              <div className="text-gray-400 text-sm md:text-base">Total Impressions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">42.5M+</div>
              <div className="text-gray-400 text-sm md:text-base">Viral Views</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">3</div>
              <div className="text-gray-400 text-sm md:text-base">Major Platforms</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">∞</div>
              <div className="text-gray-400 text-sm md:text-base">Cultural Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
