import { footerMenu, socials } from '@/utils/menus';
import { Container, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoFull from 'public/images/logo_full.svg';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r  from-obGray to-zinc-800 py-24 relative overflow-hidden">
      <Container>
        <div className="flex items-start gap-16">
          <div>
            <Image
              src={LogoFull}
              width={200}
              alt="Operation: BOT Logo Full"
              className="mb-4"
            />
            <Text size="sm" color="dimmed" className="mb-4">
              Built with love by CryptoGuru
            </Text>
            <div className="flex items-center gap-6">
              {socials.map((item, index) => (
                <a
                  key={`mainMenu-${index}`}
                  href={item.href}
                  className="text-2xl text-white"
                >
                  {<item.Icon />}
                </a>
              ))}
            </div>
          </div>
          {footerMenu.map((item, index) => (
            <div
              key={`footerMenu-section-${index}`}
              className="text-white flex flex-col gap-2"
            >
              <Text weight={700} size="lg" className="mb-2">
                {item.section}
              </Text>
              {item.items.map(({ label, href }) => (
                <Link key={`footerMenu-link-${label}`} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>
      <div className="absolute bg-obGreen rounded-full w-[320px] h-[320px] blur-[200px] top-0 left-[-60px]"></div>
      <div className="absolute bg-red-500/80 rounded-full w-[220px] h-[220px] blur-[150px] top-0 right-[-60px] opacity-50"></div>
    </div>
  );
};

export default Footer;
