import ProfileCard from '@/components/ProfileCard/ProfileCard';
import { Container, Title } from '@mantine/core';

const TeamSection = () => {
  const profileCardStyles = 'md:max-w-[265px] w-full';
  return (
    <section className="mb-24">
      <Container className="py-24">
        <>
          <Title className="text-6xl mb-16 text-secondaryGreen" align="center">
            TEAM
          </Title>
          <div className="flex items-center justify-center py-10">
            <ProfileCard
              name="Samuel James"
              title="Founder, CEO"
              image="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              linkedin=""
              className={profileCardStyles}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-16 py-10">
            <ProfileCard
              name="David Mueller"
              title="Co-Founder, CCO"
              image=""
              linkedin=""
              className={profileCardStyles}
            />
            <ProfileCard
              name="James Carter"
              title="Co-Founder, Trading Analyst"
              image=""
              linkedin=""
              className={profileCardStyles}
            />
            <ProfileCard
              name="Vainius Mykolaitis"
              title="Core Team, Developer"
              image=""
              linkedin=""
              className={profileCardStyles}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-16 py-10">
            <ProfileCard
              name="Benjamin Bending"
              title="Advisor, Developer"
              image=""
              linkedin=""
              className={profileCardStyles}
            />
            <ProfileCard
              name="Oliver Singer"
              title="Advisor, Network Marketing"
              image=""
              linkedin=""
              className={profileCardStyles}
            />
          </div>
        </>
      </Container>
    </section>
  );
};

export default TeamSection;
