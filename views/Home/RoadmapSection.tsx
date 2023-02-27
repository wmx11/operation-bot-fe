import Timeline from '@/components/Timeline';
import { Container, Title } from '@mantine/core';

const RoadmapSection = () => {
  return (
    <section>
      <Container className="pt-24">
        <Title className={`text-6xl mb-16 text-secondaryGreen distress`}>
          ROADMAP
        </Title>
      </Container>
      <div className="mb-24 overflow-auto">
        <Timeline
          data={[
            {
              isComplete: true,
              label: 'Current Period',
              date: 'Q1/2023',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
              label: 'Kickoff',
              date: 'Q2/2023',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
              label: 'Operation: Growth',
              date: 'Q3/2023',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
              label: 'Operation: Expansion',
              date: 'Q4/2023',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
              label: 'Operation: Future',
              date: 'Q1/2024',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
          ]}
        />
      </div>
    </section>
  );
};

export default RoadmapSection;
