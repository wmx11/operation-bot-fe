import ProfileCard from '@/components/ProfileCard/ProfileCard';
import styles from '@/styles/styles';
import { Container, Title } from '@mantine/core';

const TeamSection = () => {
  return (
    <section>
      <Container className={styles.containerPadding}>
        <Title className={`${styles.sectionTitle} text-obGreen`}>TEAM</Title>
        <div className="grid grid-cols-3 gap-4">
          <ProfileCard
            name="Samuel James"
            title="Founder, CEO"
            image="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            linkedin=""
          />
          <ProfileCard
            name="David Mueller"
            title="Founder, CCO"
            image=""
            linkedin=""
          />
          <ProfileCard
            name="James Carter"
            title="Founder, Trading Analyst"
            image=""
            linkedin=""
          />
          <ProfileCard
            name="Vainius Mykolaitis"
            title="Core Team, Developer"
            image=""
            linkedin=""
          />
          <ProfileCard
            name="Benjamin Bending"
            title="Advisor, Developer"
            image=""
            linkedin=""
          />
          <ProfileCard
            name="Oliver Singer"
            title="Advisor, Network Marketing"
            image=""
            linkedin=""
          />
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
