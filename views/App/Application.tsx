import Stat from '@/components/Stat/Stat';
import WalletConnect from '@/components/WalletConnect';
import { Paper, Text, Title } from '@mantine/core';
import React from 'react';

const Application = () => {
  return (
    <div>
      <Paper withBorder shadow="md" className="relative z-10 p-6 mb-16">
        <Title className="mb-4">Profile Overview</Title>
        <Text className="mb-4">
          Please connect your wallet in order to view your NFT collection, claim
          bounties, and view your stats.
        </Text>
        <WalletConnect />
      </Paper>
      <Paper withBorder shadow="lg" className="relative z-10 p-6 mb-16">
        <Title className="mb-4">Operation: NFTs Stats Overview</Title>
        <div className="flex flex-wrap gap-4">
          <Stat label="Total NFTs Sold" value="5,000" />
          <Stat label="Unique Holders" value="2,203" />
          <Stat label="Sell Backs" value="121" />
          <Stat label="Total Available disbursement" value="$4,012,224.00" />
          <Stat label="Total (all-time) disbursed" value="$8,004,225.00" />
        </div>
      </Paper>
    </div>
  );
};

export default Application;
