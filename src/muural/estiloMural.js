import styled from 'styled-components';
import Slider from 'react-slick';

export const TituloMural = styled.h1`
  color: #32579d;
  font-size: 48px;
  text-align: center;
`;

export const SliderImg = styled(Slider)`
  max-width: 600px;
  margin: 20px auto;
`;

export const ImgLista = styled.img`
  max-width: 100%;
  height: 0 auto;
`;
