import { Container, Text, Title } from '@mantine/core';
import { useState } from 'react';
import Typed from 'react-typed';
import { motion, Variants } from 'framer-motion';
import Backdrop from '../Backdrop';

const variants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 2,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

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

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            whileHover={{ rotate: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotate: 0, scale: 1.1 }}
              variants={variants}
              className="rotate-1 bg-[url(../public/images/paper.jpg)] bg-cover shadow-lg flex flex-col md:flex-row items-start justify-between p-8 gap-8"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </Container>
      <Backdrop />
    </div>
  );
};

export default Hero;
