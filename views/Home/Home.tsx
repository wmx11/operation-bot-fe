import Hero from '@/components/Hero/Hero';
import IncentivesSection from './IncentivesSection';
import OperationNFTSection from './OperationNFTSection';
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
