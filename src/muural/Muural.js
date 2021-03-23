import React from 'react';
import { TituloMural, SliderImg, ImgLista } from './estiloMural';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Muural = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <TituloMural id="mural">Muural</TituloMural>
      <SliderImg {...settings}>
        <div>
          <ImgLista src="../../img/vacas1.jpg" alt="" />
        </div>
        <div>
          <ImgLista src="../../img/vacas2.jpg" alt="" />
        </div>
        <div>
          <ImgLista src="../../img/vacas3.png" alt="" />
        </div>
      </SliderImg>
    </>
  );
};

export default Muural;
