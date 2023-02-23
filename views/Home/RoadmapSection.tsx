import styles from '@/styles/styles';

import { Container, Title } from '@mantine/core';
import React from 'react';

const RoadmapSection = () => {
  return (
    <section>
      <Container className={styles.containerPadding}>
        <Title className={`${styles.sectionTitle} text-obGreen`}>ROADMAP</Title>
      </Container>
    </section>
  );
};

export default RoadmapSection;
