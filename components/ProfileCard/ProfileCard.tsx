import Icons from '@/utils/icons';
import { Text } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';

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
    <div className="relative px-8 py-24 hover:scale-105 hover:rotate-0 transition bg-gradient-to-b from-slate-200 to-zinc-300/80 rounded-[20px] flex flex-col items-center gap-6 shadow-lg even:rotate-1 odd:-rotate-1 overflow-hidden">
      <div className="p-3 bg-white absolute rounded-full shadow-[inset_0px_1px_2px_rgba(0,0,0,0.5)] top-5 z-10"></div>
      <div className="flex flex-col items-center z-10">
        <div className="bg-secondaryGray w-[150px] h-[150px] rounded-full mb-2 relative overflow-hidden">
          <img src={image} alt="" className="absolute inset-0" />
        </div>
        <Text weight={700} size="xl">
          {name}
        </Text>
        <Text>{title}</Text>
      </div>
      <Link href={linkedin as string} className="hover:scale-105 transition z-10">
        <Icons.Linkedin className="text-3xl text-secondaryGray" />
      </Link>
      <div className="absolute bg-[url(../public/images/metal.jpg)] inset-0 bg-cover w-full h-full opacity-60"></div>
    </div>
    // <div className="stamp p-8 rounded-lg flex flex-col items-center gap-6">
    //   <div className="flex flex-col items-center z-10 rotate-1">
    //     <div className="bg-secondaryGreen w-[150px] h-[150px] rounded-full mb-2 relative overflow-hidden hover:scale-105 transition">
    //       <img src={image} alt="" className="absolute inset-0" />
    //     </div>
    //     <Text weight={700} size="xl">
    //       {name}
    //     </Text>
    //     <Text>{title}</Text>
    //   </div>
    //   <Link href={linkedin as string} className="hover:scale-105 transition">
    //     <Icons.Linkedin className="text-3xl text-secondaryGray" />
    //   </Link>
    // </div>
  );
};

export default ProfileCard;
