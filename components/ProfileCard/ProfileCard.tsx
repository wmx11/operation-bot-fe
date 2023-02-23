import Icons from '@/utils/icons';
import { Paper, Text } from '@mantine/core';
import Link from 'next/link';
import React, { FC } from 'react';

type ProfileCardTypes = {
  image?: string;
  name?: string;
  title?: string;
  linkedin?: string;
};

const ProfileCard: FC<ProfileCardTypes> = ({
  image,
  linkedin,
  name,
  title,
}) => {
  return (
    <Paper
      withBorder
      shadow="lg"
      p="lg"
      className="flex flex-col items-center gap-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center">
        <div className="bg-obGreen w-[150px] h-[150px] rounded-full mb-2 relative overflow-hidden hover:scale-105 transition">
          <img src={image} alt="" className="absolute inset-0" />
        </div>
        <Text weight={700} size="xl">
          {name}
        </Text>
        <Text>{title}</Text>
      </div>
      <Link href={linkedin as string} className="hover:scale-105 transition">
        <Icons.Linkedin className="text-3xl text-obGray" />
      </Link>
    </Paper>
  );
};

export default ProfileCard;
