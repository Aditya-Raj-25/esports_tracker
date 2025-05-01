import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import GameSelector from './GameSelector';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Track <span className="text-blue-500">Esports</span> Like Never Before
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Real-time stats, match analytics, and tournament tracking for all your favorite esports games in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Explore Tournaments
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                Live Matches <ChevronRight size={16} />
              </Button>
            </div>

            <div className="mt-12">
              <p className="text-gray-400 mb-4">Featured Games</p>
              <GameSelector />
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-700 transform rotate-3 hover:rotate-0 transition-all duration-300">
                <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs font-semibold mb-2">LIVE NOW</span>
                      <h3 className="text-xl font-bold text-white">VCT 2025 Masters</h3>
                      <p className="text-gray-400 text-sm">Shanghai, China</p>
                    </div>
                    <span className="text-yellow-400 font-bold">$1,000,000</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-900/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">T</div>
                          <span className="font-medium text-white">Team Liquid</span>
                        </div>
                        <span className="font-bold text-white">13</span>
                      </div>
                    </div>
                    <div className="bg-gray-900/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">F</div>
                          <span className="font-medium text-white">FaZe Clan</span>
                        </div>
                        <span className="font-bold text-white">7</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href='https://www.youtube.com/@ewc'>
                      <Button className="w-full">Watch Live</Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-purple-500/10 rounded-xl -z-10 transform rotate-6 translate-x-4 translate-y-4 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;