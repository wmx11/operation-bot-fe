import styles from '@/styles/styles';
import { Container, Title } from '@mantine/core';
import React from 'react';

const IncentivesSection = () => {
  return (
    <section>
      <Container className={styles.containerPadding}>
        <Title className={`${styles.sectionTitle} text-obGreen`}>
          INCENTIVES
        </Title>
      </Container>
    </section>
  );
};

export default IncentivesSection;
