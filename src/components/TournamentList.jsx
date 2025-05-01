// import React from 'react';
// import { Card, CardHeader, CardBody } from './ui/Card';
// import { Badge } from './ui/Badge';
// import { Link } from './ui/Link';
// import { Globe } from 'lucide-react';
// import './TournamentList.css';

// const TournamentList = () => {
//   // Mock data
//   const tournaments = [
//     {
//       id: '1',
//       name: 'VCT 2025 Masters',
//       link: "https://liquipedia.net/valorant/VCT/2025/China_League/Stage_1",
//       game: 'Valorant',
//       startDate: '2025-03-15',
//       endDate: '2025-03-28',
//       location: 'Shanghai, China',
//       prize: '$1,000,000',
//       status: 'ongoing',
//       teams: 16
//     },
//     {
//       id: '2',
//       name: 'ESL Pro League Season 23',
//       link: "https://www.hltv.org/events/8404/european-pro-league-season-23",
//       game: 'CS2',
//       startDate: '2025-04-05',
//       endDate: '2025-04-25',
//       location: 'Malta',
//       prize: '$850,000',
//       status: 'upcoming',
//       teams: 24
//     },
//     {
//       id: '3',
//       name: 'The International 2025',
//       link: "https://www.dota2.com/newsentry/569242769355177990",
//       game: 'Dota 2',
//       startDate: '2025-08-10',
//       endDate: '2025-08-25',
//       location: 'Stockholm, Sweden',
//       prize: '$30,000,000',
//       status: 'upcoming',
//       teams: 18
//     },
//     {
//       id: '4',
//       name: 'League of Legends World Championship',
//       link: "https://lol.fandom.com/wiki/2025_Season_World_Championship",
//       game: 'LoL',
//       startDate: '2025-09-25',
//       endDate: '2025-10-29',
//       location: 'Seoul, South Korea',
//       prize: '$2,250,000',
//       status: 'upcoming',
//       teams: 24
//     },
//     {
//       id: '5',
//       name: 'IEM Katowice 2025',
//       link: "https://pro.eslgaming.com/tour/cs/katowice/",
//       game: 'CS2',
//       startDate: '2025-02-10',
//       endDate: '2025-02-23',
//       location: 'Katowice, Poland',
//       prize: '$1,000,000',
//       status: 'completed',
//       teams: 24
//     },
//   ];

//   const statusBadge = (status) => {
//     switch (status) {
//       case 'upcoming':
//         return <Badge variant="secondary">Upcoming</Badge>;
//       case 'ongoing':
//         return <Badge variant="success">Live Now</Badge>;
//       case 'completed':
//         return <Badge variant="default">Completed</Badge>;
//       default:
//         return null;
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   return (
//     <section className="tournament-list-section">
//       <div className="tournament-list-header">
//         <h2 className="tournament-list-title">Featured Tournaments</h2>
//         <p className="tournament-list-description">Browse the latest esports tournaments from around the world</p>
//       </div>

//       <div className="tournament-grid">
//         {tournaments.map(tournament => (
//           <a href={tournaments.link} key={tournaments.id}>
//             <Link to={`/tournaments/${tournament.id}`} key={tournament.id} className="tournament-link">
//             <Card className={tournaments.status === 'turnament' ? 'turnament-list'}>
//               <CardHeader>
//                 <div className="flex-justify-between">
//                   <div>
//                     {statusBadge(tournament.status)}
//                     <h3 className="tournament-name">{tournament.name}</h3>
//                     <p className="tournament-info">{tournament.game}</p>
//                   </div>
//                   <div className="text-right">
//                     <span className="tournament-prize">{tournament.prize}</span>
//                     <span className="tournament-teams">{tournament.teams} Teams</span>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardBody>
//                 <div className="flex-items-center">
//                   <Globe className="h-4 w-4 icon-margin-right text-gray-500" />
//                   {tournament.location}
//                 </div>
//                 <div className="flex-justify-between-sm">
//                   <div>
//                     <p className="text-gray-500">Starts</p>
//                     <p className="text-white">{formatDate(tournament.startDate)}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-gray-500">Ends</p>
//                     <p className="text-white">{formatDate(tournament.endDate)}</p>
//                   </div>
//                 </div>
//               </CardBody>
//             </Card>
//           </Link>
//           </a>
//         ))}
//     </div>
//     </section >
//   );
// };

// export default TournamentList;
import React from 'react';
import { Card, CardHeader, CardBody } from './ui/Card';
import { Badge } from './ui/Badge';
import { Globe } from 'lucide-react';
import './TournamentList.css';

const TournamentList = () => {
  const tournaments = [
    {
      id: '1',
      name: 'VCT 2025 Masters',
      link: "https://liquipedia.net/valorant/VCT/2025/China_League/Stage_1",
      game: 'Valorant',
      startDate: '2025-03-15',
      endDate: '2025-03-28',
      location: 'Shanghai, China',
      prize: '$1,000,000',
      status: 'ongoing',
      teams: 16
    },
    {
      id: '2',
      name: 'ESL Pro League Season 23',
      link: "https://www.hltv.org/events/8404/european-pro-league-season-23",
      game: 'CS2',
      startDate: '2025-04-05',
      endDate: '2025-04-25',
      location: 'Malta',
      prize: '$850,000',
      status: 'upcoming',
      teams: 24
    },
    {
      id: '3',
      name: 'The International 2025',
      link: "https://www.dota2.com/newsentry/569242769355177990",
      game: 'Dota 2',
      startDate: '2025-08-10',
      endDate: '2025-08-25',
      location: 'Stockholm, Sweden',
      prize: '$30,000,000',
      status: 'upcoming',
      teams: 18
    },
    {
      id: '4',
      name: 'League of Legends World Championship',
      link: "https://lol.fandom.com/wiki/2025_Season_World_Championship",
      game: 'LoL',
      startDate: '2025-09-25',
      endDate: '2025-10-29',
      location: 'Seoul, South Korea',
      prize: '$2,250,000',
      status: 'upcoming',
      teams: 24
    },
    {
      id: '5',
      name: 'IEM Katowice 2025',
      link: "https://pro.eslgaming.com/tour/cs/katowice/",
      game: 'CS2',
      startDate: '2025-02-10',
      endDate: '2025-02-23',
      location: 'Katowice, Poland',
      prize: '$1,000,000',
      status: 'completed',
      teams: 24
    },
  ];

  const statusBadge = (status) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="secondary">Upcoming</Badge>;
      case 'ongoing':
        return <Badge variant="success">Live Now</Badge>;
      case 'completed':
        return <Badge variant="default">Completed</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="tournament-list-section">
      <div className="tournament-list-header">
        <h2 className="tournament-list-title">Featured Tournaments</h2>
        <p className="tournament-list-description">
          Browse the latest esports tournaments from around the world
        </p>
      </div>

      <div className="tournament-grid">
        {tournaments.map(tournament => (
          <a
            href={tournament.link}
            key={tournament.id}
            className="tournament-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardHeader>
                <div className="flex-justify-between">
                  <div>
                    {statusBadge(tournament.status)}
                    <h3 className="tournament-name">{tournament.name}</h3>
                    <p className="tournament-info">{tournament.game}</p>
                  </div>
                  <div className="text-right">
                    <span className="tournament-prize">{tournament.prize}</span>
                    <span className="tournament-teams">{tournament.teams} Teams</span>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex-items-center">
                  <Globe className="h-4 w-4 icon-margin-right text-gray-500" />
                  {tournament.location}
                </div>
                <div className="flex-justify-between-sm">
                  <div>
                    <p className="text-gray-500">Starts</p>
                    <p className="text-white">{formatDate(tournament.startDate)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Ends</p>
                    <p className="text-white">{formatDate(tournament.endDate)}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TournamentList;
