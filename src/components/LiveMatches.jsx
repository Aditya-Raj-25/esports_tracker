import React from 'react';
import { Card, CardBody } from './ui/Card';
import { Badge } from './ui/Badge';
import { Link } from './ui/Link';
import './LiveMatches.css';

const LiveMatches = () => {
  // Mock data
  const matches = [
    {
      id: '1',
      tournament: 'VCT 2025 Masters',
      link: "https://www.vlr.gg/matches/results",
      teamA: {
        name: 'Team Liquid',
        logo: 'TL',
        score: 13
      },
      teamB: {
        name: 'FaZe Clan',
        logo: 'FZ',
        score: 7
      },
      status: 'live',
      time: '23:15',
      game: 'Valorant'
    },
    {
      id: '2',
      tournament: 'ESL Pro League',
      link: "https://theesportslab.com/",
      teamA: {
        name: 'Natus Vincere',
        logo: 'NV',
        score: 10
      },
      teamB: {
        name: 'G2 Esports',
        logo: 'G2',
        score: 12
      },
      status: 'live',
      time: '12:45',
      game: 'CS2'
    },
    {
      id: '3',
      tournament: 'LCS Spring Split',
      link: "https://theesportslab.com/esports/lol/stats",
      teamA: {
        name: 'Cloud9',
        logo: 'C9',
        score: 0
      },
      teamB: {
        name: 'Team SoloMid',
        logo: 'TSM',
        score: 0
      },
      status: 'upcoming',
      time: 'Today, 18:00',
      game: 'LoL'
    },
    {
      id: '4',
      tournament: 'The International',
      link: "https://theesportslab.com/esports/dota2/stats",
      teamA: {
        name: 'OG',
        logo: 'OG',
        score: 2
      },
      teamB: {
        name: 'Team Secret',
        logo: 'TS',
        score: 0
      },
      status: 'live',
      time: '01:30',
      game: 'Dota 2'
    },
  ];

  return (
    <section className="live-matches-section">
      <div className="live-matches-container">
        <div className="live-matches-header">
          <h2 className="live-matches-title">Live Matches</h2>
          <p className="live-matches-description">Watch your favorite teams compete in real-time</p>
        </div>

        <div className="live-matches-grid">
          {matches.map(match => (
            <a href={match.link} key={match.id}>
              <Card className={match.status === 'live' ? 'live-match-card-live' : ''}>
                <CardBody>
                  <div className="flex-justify-between-center">
                    <span className="text-xs text-gray-500">{match.tournament}</span>
                    {match.status === 'live' ? (
                      <div className="flex-items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></span>
                        <Badge variant="danger">LIVE</Badge>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-500">{match.time}</span>
                    )}
                  </div>

                  <div className="flex-justify-between mb-4">
                    <div className="flex-space-x-3 flex-items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-blue flex-items-center justify-center text-white font-bold">
                        {match.teamA.logo}
                      </div>
                      <span className="font-medium text-white">{match.teamA.name}</span>
                    </div>
                    {match.status !== 'upcoming' && (
                      <span className={`text-xl font-bold ${match.teamA.score > match.teamB.score ? 'text-white' : 'text-gray-500'}`}>
                        {match.teamA.score}
                      </span>
                    )}
                  </div>

                  <div className="flex-justify-between">
                    <div className="flex-space-x-3 flex-items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-red flex-items-center justify-center text-white font-bold">
                        {match.teamB.logo}
                      </div>
                      <span className="font-medium text-white">{match.teamB.name}</span>
                    </div>
                    {match.status !== 'upcoming' && (
                      <span className={`text-xl font-bold ${match.teamB.score > match.teamA.score ? 'text-white' : 'text-gray-500'}`}>
                        {match.teamB.score}
                      </span>
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <span className="text-xs text-gray-500">{match.game}</span>
                  </div>
                </CardBody>
              </Card>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMatches;
