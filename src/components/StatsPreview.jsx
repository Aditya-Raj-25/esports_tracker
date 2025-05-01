import React from 'react';
import { Card, CardHeader, CardBody } from './ui/Card';
import { Link } from './ui/Link';
import { Button } from './ui/Button';
import { TrendingUp, Award, Users } from 'lucide-react';
import './StatsPreview.css';

const StatsPreview = () => {
  return (
    <section className="stats-section">
      <div className="stats-header">
        <h2 className="stats-title">Analytics Dashboard</h2>
        <p className="stats-description">
          Dive deep into performance metrics, team statistics, and player rankings across all your favorite esports titles
        </p>
      </div>

      <div className="stats-grid">
        <Card>
          <CardHeader>
            <div className="card-header-flex">
              <TrendingUp className="h-6 w-6 text-blue-500 icon-margin" />
              <h3 className="text-xl font-bold text-white">Game Popularity</h3>
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Valorant</span>
                  <span className="text-gray-400">32%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-red" style={{ width: '32%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">CS2</span>
                  <span className="text-gray-400">28%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-yellow" style={{ width: '28%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">League of Legends</span>
                  <span className="text-gray-400">24%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-blue" style={{ width: '24%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Dota 2</span>
                  <span className="text-gray-400">16%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-purple" style={{ width: '16%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link to="/stats">
                <Button variant="outline" className="w-full">View Full Analysis</Button>
              </Link>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="card-header-flex">
              <Award className="h-6 w-6 text-yellow-500 icon-margin" />
              <a className="text-xl font-bold text-white" href="https://escharts.com/players">Top Players</a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium mr-3">1</span>
                <div className="flex-1">
                  <h4 className="text-white font-medium">s1mple</h4>
                  <p className="text-gray-400 text-sm">CS2 - Natus Vincere</p>
                </div>
                <div className="text-green-400 font-bold">1.32</div>
              </div>

              <div className="flex items-center">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium mr-3">2</span>
                <div className="flex-1">
                  <h4 className="text-white font-medium">TenZ</h4>
                  <p className="text-gray-400 text-sm">Valorant - Sentinels</p>
                </div>
                <div className="text-green-400 font-bold">1.28</div>
              </div>

              <div className="flex items-center">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium mr-3">3</span>
                <div className="flex-1">
                  <h4 className="text-white font-medium">Faker</h4>
                  <p className="text-gray-400 text-sm">LoL - T1</p>
                </div>
                <div className="text-green-400 font-bold">4.7</div>
              </div>

              <div className="flex items-center">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium mr-3">4</span>
                <div className="flex-1">
                  <h4 className="text-white font-medium">Yay</h4>
                  <p className="text-gray-400 text-sm">Valorant - Cloud9</p>
                </div>
                <div className="text-green-400 font-bold">1.25</div>
              </div>
            </div>

            <div className="mt-6">
              <a href="https://escharts.com/players" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">View All Players</Button>
              </a>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="card-header-flex">
              <Users className="h-6 w-6 text-purple-500 icon-margin" />
              <h3 className="text-xl font-bold text-white">Top Teams</h3>
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium mr-3">1</span>
                <div className="flex-1">
                  <h4 className="text-white font-medium">Team Liquid</h4>
                  <p className="text-gray-400 text-sm">Valorant</p>
                </div>
                <div className="text-yellow-400 font-bold">+215</div>
              </div>

              <div className="flex items-center">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium mr-3">2</span>
                <div className="flex-1">
                  <h4 className="text-white font-medium">FaZe Clan</h4>
                  <p className="text-gray-400 text-sm">CS2</p>
                </div>
                <div className="text-yellow-400 font-bold">+189</div>
              </div>

              <div className="flex items-center">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium mr-3">3</span>
                <div className="flex-1">
                  <h4 className="text-white font-medium">T1</h4>
                  <p className="text-gray-400 text-sm">League of Legends</p>
                </div>
                <div className="text-yellow-400 font-bold">+175</div>
              </div>

              <div className="flex items-center">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium mr-3">4</span>
                <div className="flex-1">
                  <h4 className="text-white font-medium">OG</h4>
                  <p className="text-gray-400 text-sm">Dota 2</p>
                </div>
                <div className="text-yellow-400 font-bold">+168</div>
              </div>
            </div>

            <div className="mt-6">
              <a href='https://escharts.com/teams' target='blank' rel="noopener noreferrer">
                <Button variant="outline" className="w-full">View All Teams</Button>
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default StatsPreview;
