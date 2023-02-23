import Table from '@/components/Table/Table';
import styles from '@/styles/styles';

import { Container, Paper, Text, Title } from '@mantine/core';
import React from 'react';

const OperationNFTSection = () => {
  return (
    <section>
      <Container className={styles.containerPadding}>
        <Title className={`${styles.sectionTitle} `}>
          OPERATION: <span className="text-obGreen">NFTs</span>
        </Title>
        <Paper withBorder shadow="lg" p="lg" className="mb-4  shadow-[0px_0px_200px_0px_rgba(94,158,94,0.3)]">
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
                row: ['Lieutenant', '$1,250.00', '$81.25', '3.38', '$4,225.00'],
              },
              { row: ['Major', '$2,500.00', '$175.00', '3.64', '$9,100.00'] },
              {
                row: ['Commander', '$5,000.00', '$375.00', '3.9', '$19,500.00'],
              },
              { row: ['Chief', '$10,000.00', '$800.00', '4.16', '$41,600.00'] },
            ]}
          />
        </Paper>
        <div className="flex flex-col gap-4">
          <Text>
            <strong>Price</strong> = the amount of money you will pay to
            purchase the NFT
          </Text>
          <Text>
            <strong> Weekly bounty</strong> = the amount of $ you will be paid
            each week you claim
          </Text>
          <Text>
            <strong>Annual bounty</strong> = is the initial price paid for the
            NFT multiplied by the reward factor.
          </Text>
          <Text>
            <Text weight={700}>Example</Text>
            When you buy a Chief NFT, you pay $10,000. Each week you will earn
            $800. After 52 weeks, you will have claimed $41,600 (10,000*4.16).
          </Text>
        </div>
      </Container>
    </section>
  );
};

export default OperationNFTSection;
