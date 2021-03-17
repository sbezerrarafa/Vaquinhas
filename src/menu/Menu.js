import React from 'react';
import { Menula, LiMenu, Logo } from './estilo';

const Menu = () => {
  return (
    <div>
      <nav>
        <Logo />
        <Menula>
          <LiMenu>Home</LiMenu>
          <LiMenu>Sobre</LiMenu>
          <LiMenu>Muuuural</LiMenu>
          <LiMenu>Doe</LiMenu>
        </Menula>
      </nav>
    </div>
  );
};

export default Menu;
