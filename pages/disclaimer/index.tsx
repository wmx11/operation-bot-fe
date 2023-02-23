/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/styles';
import { Container, Text, Title } from '@mantine/core';
import React from 'react';

const index = () => {
  return (
    <article>
      <Container className={styles.containerPadding}>
        <Title className={`${styles.sectionTitle} text-obGreen`}>
          Signals & Codes (Disclaimer)
        </Title>
        <div className="flex flex-col gap-6">
          <Text>
            The information in this litepaper is not a recommendation of
            investment, financial advice, trading advice or any kind of advice
            and should not be considered advice. Seek professional financial
            advice before making any investment decisions. Operation: BOT will
            not accept responsibility for investment decisions made by NFT
            buyers. Operation: BOT provides information for your understanding
            and ease of navigation. You understand that using this information
            is at your own risk. Operation: BOT reserves the right to update,
            amend, add or delete information from this litepaper. Please pay
            attention to the litepaper version reference and publication date.
          </Text>
          <Text>
            You will not receive any rights to dividends or voting rights like a
            security token. You will not have enforceable rights. You should
            verify with your jurisdiction's legal and regulatory environment if
            Operation: BOT NFTs are allowed.
          </Text>
          <Text>
            NFT investments are high-risk and may not generally be appropriate,
            particularly with funds drawn from retirement savings, student
            loans, mortgages, emergency funds, or funds set aside for other
            purposes. NFT investments can lose their value resulting in your
            capital being lost.
          </Text>
          <Text>
            NFT transactions are often irreversible, resulting in losses due to
            fraudulent or accidental actions. The nature of NFTs may lead to an
            increased risk of fraud or cyber attack. Don't invest more than what
            you can afford to lose. As volatility increases within specific
            blockchain-related technologies, so does the likelihood of problems
            while executing a transaction. In addition to normal market risks,
            you may experience losses due to one or more of the following:
            system failures, hardware failures, software failures, network
            connectivity disruptions, and data corruption.
          </Text>
        </div>
      </Container>
    </article>
  );
};

export default index;
