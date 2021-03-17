import React from 'react';
import { ImagemFundo, Titulo } from './estiloHeader';
import Btn from '../botao/Btn';

const Header = () => {
  return (
    <ImagemFundo>
      <Titulo>Vaquinhas</Titulo>
      <Btn />
    </ImagemFundo>
  );
};

export default Header;
