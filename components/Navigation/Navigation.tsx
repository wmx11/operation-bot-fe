import { mainMenu, socials } from '@/utils/menus';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex justify-between w-[50%]">
      <div className="flex items-center gap-6">
        {mainMenu.map((item, index) => (
          <Link key={`mainMenu-${index}`} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        {socials.map((item, index) => (
          <a
            key={`mainMenu-${index}`}
            href={item.href}
            className="text-2xl text-obGray"
          >
            {<item.Icon />}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
