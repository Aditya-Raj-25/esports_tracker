import React from 'react';
import Hero from '../components/Hero';
import TournamentList from '../components/TournamentList';
import LiveMatches from '../components/LiveMatches';
import StatsPreview from '../components/StatsPreview';

import './Home.css';

const Home = () => {
  return (
    <div className="home-root">
      <Hero />
      <LiveMatches />
      <TournamentList />
      <StatsPreview />
    </div>
  );
};

export default Home;