import { Container, Paper, Text, Title } from '@mantine/core';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container className="py-24 grid grid-cols-[1fr,350px]">
        <div>
          <Title className="text-6xl mb-4">
            OPERATION: <span className="text-obGreen">BOT</span>
          </Title>
          <Text className="flex flex-col gap-4 text-lg mb-16">
            Self-learning software that is fed with data and strategies from a
            professional trader.
            <Text>
              You want to be part of this? Then sign up for recruitment!
            </Text>
            <Text>
              Not sure yet? Check what we have achieved in our BOT dashboard.
            </Text>
          </Text>

          <Paper
            shadow="lg"
            className="flex items-start justify-between p-8 bg-gradient-to-r from-obGreen to-obGray"
          >
            <div className="text-white text-center">
              <Title order={2} className="text-5xl">
                +${(150000).toLocaleString()}
              </Title>
              <Text>Total Capital</Text>
            </div>
            <div className="text-white text-center">
              <Title order={2} className="text-5xl">
                +${(800000).toLocaleString()}
              </Title>
              <Text>Profit</Text>
            </div>
          </Paper>
        </div>
      </Container>
      <div className="absolute bg-obGreen rounded-full w-[120px] h-[120px] blur-[100px] top-0 left-[-60px]"></div>
      <div className="absolute bg-obGreen rounded-full w-[300px] h-[300px] blur-[250px] top-[-150px] right-[-150px]"></div>
      <div className="absolute bg-obGreen rounded-full w-[400px] h-[400px] blur-[400px] bottom-[-150px] left-[-150px]"></div>
    </div>
  );
};

export default Hero;
