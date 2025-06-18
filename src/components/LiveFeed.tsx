import React from 'react';
import { Twitter, Instagram, ArrowRight, Globe, Calendar } from 'lucide-react';

const LiveFeed = () => {
  const recentTweets = [
    {
      content: "12 years ago today, @LinesofLogic posted its first tweet. From 0 followers to building Logic's digital empire. The journey continues. #RattPackForever #PLP",
      timestamp: "2 days ago",
      engagement: { likes: 1847, retweets: 423, replies: 156 }
    },
    {
      content: "THREAD: Analyzing the cultural impact of the \"I don't f*** with nobody\" moment from 2015. How one interview clip became a career-defining tagline 🧵",
      timestamp: "1 week ago",
      engagement: { likes: 2341, retweets: 567, replies: 234 }
    },
    {
      content: "That moment when your 28.2M loop Vine gets referenced in a Logic documentary. Still can't believe that 6-second clip changed everything 🎬 #TBT",
      timestamp: "2 weeks ago",
      engagement: { likes: 3456, retweets: 890, replies: 445 }
    }
  ];

  const liveEvents = [
    {
      title: "All Sinatra Everything (2019)",
      description: "First-ever Logic fan experience event in NYC - sold out with Steve Blum cameo",
      status: "Legendary",
      icon: Calendar
    },
    {
      title: "RattPackForever.com Relaunch",
      description: "Complete site rebuild featuring discography, blog, and community hub",
      status: "Active",
      icon: Globe
    },
    {
      title: "Phoenix From The Nexton",
      description: "Fan tribute video endorsed and shared by Logic on Instagram",
      status: "Viral",
      icon: Instagram
    }
  ];

  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Remove the Live Events & Projects column */}
        </div>
      </div>
    </section>
  );
};

export default LiveFeed;
