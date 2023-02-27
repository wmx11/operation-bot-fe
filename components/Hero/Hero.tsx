import { Container, Text, Title } from '@mantine/core';
import { useState } from 'react';
import Typed from 'react-typed';

const Hero = () => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <div className="relative min-h-screen">
      <Container className="py-24">
        <div className="flex flex-col items-center gap-4">
          <Title className="text-5xl md:text-8xl mb-4">
            {isComplete ? (
              <>
                OPERATION: <span className="text-secondaryGreen">BOT.</span>
              </>
            ) : (
              <Typed
                strings={['OPERATION: BOT.']}
                typeSpeed={100}
                onComplete={() => setIsComplete(true)}
              />
            )}
          </Title>
          <Text className="flex flex-col gap-4 md:text-xl mb-16 text-center">
            Self-learning software that is fed with data and strategies from a
            professional trader.
            <Text>
              You want to be part of this? Then sign up for recruitment!
            </Text>
            <Text>
              Not sure yet? Check what we have achieved in our BOT dashboard.
            </Text>
          </Text>

          <div className="rotate-1 border-8 border-primaryRed flex flex-col md:flex-row items-start justify-between p-8 gap-8 text-primaryRed rounded-xl">
            <div className="text-center">
              <Title order={2} className="text-6xl mb-2">
                +${(150000).toLocaleString()}
              </Title>
              <Text className="text-xl">Total Capital</Text>
            </div>
            <div className="text-center">
              <Title order={2} className="text-6xl mb-2">
                +${(800000).toLocaleString()}
              </Title>
              <Text className="text-xl">Profit</Text>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bg-secondaryGreen rounded-full w-[400px] h-[400px] blur-[400px] top-[-150px] left-[-60px]"></div>
      <div className="absolute bg-secondaryGreen rounded-full w-[400px] h-[400px] blur-[400px] top-[-150px] right-[-150px]"></div>
      <div className="absolute bg-secondaryOrange rounded-full w-[400px] h-[400px] blur-[400px] bottom-[-150px] right-[-150px]"></div>
      <div className="absolute bg-primaryRed rounded-full w-[400px] h-[400px] blur-[400px] bottom-[-150px] left-[-150px]"></div>
      {/* <div className="absolute p-4 text-primaryRed text-8xl font-bold border-8 border-primaryRed rounded-lg rotate-45 right-0 bottom-[400px] opacity-40 -z-10">
        DECLASSIFIED
      </div> */}
    </div>
  );
};

export default Hero;
