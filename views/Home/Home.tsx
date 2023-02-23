import Hero from '@/components/Hero/Hero';
import { Title } from '@mantine/core';
import React from 'react';
import OperationNFTSection from './OperationNFTSection';
import IncentivesSection from './IncentivesSection';
import RoadmapSection from './RoadmapSection';
import TeamSection from './TeamSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <OperationNFTSection />
      <IncentivesSection />
      <RoadmapSection />
      <TeamSection />
    </div>
  );
};

export default Home;
