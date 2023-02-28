import { Paper, Text, Title } from '@mantine/core';
import React, { FC } from 'react';

type StatTypes = {
  label?: string;
  value?: string | number;
};

const Stat: FC<StatTypes> = ({ label, value }) => {
  return (
    <Paper
      withBorder
      p="lg"
      shadow="lg"
      className="text-center py-8 w-full md:w-[320px] hover:shadow-xl transition-shadow"
    >
      <Title className="text-4xl mb-2">{value}</Title>
      <Text>{label}</Text>
    </Paper>
  );
};

export default Stat;
