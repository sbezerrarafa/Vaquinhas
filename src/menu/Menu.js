import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navbar, Menula, LiMenu, Logo } from './estilo';

const Menu = () => {
  return (
    <div>
      <Navbar>
        <Logo />
        <Menula>
       
          <LiMenu>
            <AnchorLink href="#header">Home</AnchorLink>
          </LiMenu>
          <LiMenu>
            <AnchorLink href="#sobre">Sobre</AnchorLink>
          </LiMenu>
          <LiMenu>
            <AnchorLink href="#mural">Mural</AnchorLink>
          </LiMenu>
          <LiMenu>
            <AnchorLink href="#formulario">Contato</AnchorLink>
          </LiMenu>
        </Menula>
      </Navbar>
    </div>
  );
};

export default Menu;
