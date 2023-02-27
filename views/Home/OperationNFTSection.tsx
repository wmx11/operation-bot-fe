import PaperStack from '@/components/PaperStack';
import Table from '@/components/Table/Table';

import { Container, Text, Title } from '@mantine/core';

const OperationNFTSection = () => {
  return (
    <section>
      <Container className="py-24">
        <PaperStack>
          <Title className="text-6xl mb-16 -rotate-1" align="center">
            OPERATION: <span className="text-secondaryGreen">NFTs</span>
          </Title>
          <div className="mb-4">
            <Table
              header={[
                { title: 'Rank' },
                { title: 'Price' },
                { title: 'Weekly Bounty' },
                { title: 'Annual Bounty (Reward Factor)' },
                { title: 'Annual Bounty' },
              ]}
              rows={[
                { row: ['Grunt', '$20.00', '$1.00', '2.6', '$52.00'] },
                { row: ['Corporal', '$100.00', '$5.50', '2.86', '$286.00'] },
                { row: ['Sergeant', '$500.00', '$30.00', '3.12', '$1,560.00'] },
                {
                  row: [
                    'Lieutenant',
                    '$1,250.00',
                    '$81.25',
                    '3.38',
                    '$4,225.00',
                  ],
                },
                { row: ['Major', '$2,500.00', '$175.00', '3.64', '$9,100.00'] },
                {
                  row: [
                    'Commander',
                    '$5,000.00',
                    '$375.00',
                    '3.9',
                    '$19,500.00',
                  ],
                },
                {
                  row: ['Chief', '$10,000.00', '$800.00', '4.16', '$41,600.00'],
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-4 z-10">
            <Text weight={700} className="text-3xl italic z-10">
              Notes:
            </Text>
            <Text className="z-10">
              <strong>Price</strong> = the amount of money you will pay to
              purchase the NFT
            </Text>
            <Text className="z-10">
              <strong> Weekly bounty</strong> = the amount of $ you will be paid
              each week you claim
            </Text>
            <Text className="z-10">
              <strong>Annual bounty</strong> = is the initial price paid for the
              NFT multiplied by the reward factor.
            </Text>
            <Text className="z-10">
              <Text weight={700}>Example</Text>
              When you buy a Chief NFT, you pay $10,000. Each week you will earn
              $800. After 52 weeks, you will have claimed $41,600 (10,000*4.16).
            </Text>
          </div>
        </PaperStack>
      </Container>
    </section>
  );
};

export default OperationNFTSection;
