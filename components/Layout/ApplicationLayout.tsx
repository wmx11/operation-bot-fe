import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import Backdrop from '../Backdrop';

const ApplicationLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-[320px,1fr]">
      <div className="p-8 min-h-screen border-r backdrop-blur-lg">
        <div className="flex flex-col gap-4">
          <Link
            className="bg-secondaryGreen px-3 py-4 font-bold text-white rounded-md hover:opacity-90"
            href="#"
          >
            Profile
          </Link>
          <Link
            className="bg-secondaryGreen px-3 py-4 font-bold text-white rounded-md hover:opacity-90"
            href="#"
          >
            Claim Bounty
          </Link>
          <Link
            className="bg-secondaryGreen px-3 py-4 font-bold text-white rounded-md hover:opacity-90"
            href="#"
          >
            Questions
          </Link>
          <Link
            className="bg-secondaryGreen px-3 py-4 font-bold text-white rounded-md hover:opacity-90"
            href="#"
          >
            Disconnect
          </Link>
        </div>
      </div>
      <div className="relative overflow-hidden p-8">
        {children}
        <Backdrop />
      </div>
    </div>
  );
};

export default ApplicationLayout;
