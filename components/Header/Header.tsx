import { Button, Container } from '@mantine/core';
import React from 'react';
import Navigation from '../Navigation';
import Logo from 'public/images/logo.svg';
import Image from 'next/image';
import Icons from '@/utils/icons';

const Header = () => {
  return (
    <div className="border-b backdrop-blur-md sticky top-0 z-20">
      <Container>
        <div className="flex items-center justify-between py-6">
          <div>
            <Image src={Logo} width={40} alt="Operation: Bot Logo" />
          </div>
          <Navigation />
          <div className="flex gap-4 items-center">
            <Button rightIcon={<Icons.External />}>MINT</Button>
            <Button rightIcon={<Icons.Wallet />}>CONNECT</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
