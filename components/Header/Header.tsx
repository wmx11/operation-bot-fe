import { Button } from '@mantine/core';
import React from 'react';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <div className="flex items-center juistfy-between py-4">
      <div>Logo</div>
      <Navigation />
      <div>
        <Button>Connect</Button>
      </div>
    </div>
  );
};

export default Header;
