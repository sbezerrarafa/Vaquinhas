import React from 'react';
import { ImagemFundo, Titulo } from './estiloHeader';
import Btn from '../botao/Btn';

const Header = () => {
  return (
    <ImagemFundo id="header">
      <Titulo>Vaquinhas</Titulo>
      <Btn />
    </ImagemFundo>
  );
};

export default Header;
