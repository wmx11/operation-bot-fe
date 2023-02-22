import { Button, Container } from '@mantine/core';
import React from 'react';
import Navigation from '../Navigation';
import Logo from 'public/images/logo.svg';
import Image from 'next/image';
import icons from '@/utils/icons';

const Header = () => {
  return (
    <div className="border-b border-obGray/20 backdrop-blur-sm">
      <Container>
        <div className="flex items-center justify-between py-6">
          <div>
            <Image src={Logo} width={40} alt="Operation: Bot Logo" />
          </div>
          <Navigation />
          <div className="flex gap-4 items-center">
            <Button rightIcon={<icons.External />}>MINT</Button>
            <Button rightIcon={<icons.Wallet />}>CONNECT</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
