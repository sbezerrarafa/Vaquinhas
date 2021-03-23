import styled from 'styled-components';

export const ImagemFundo = styled.div`
  display: inline-block;
  padding-top: 30px;
  width: 100%;
  height: 500px;
  background: url('../../img/vacao.jpg') center center;
  background-size: cover;
  @media (max-width: 800px) {
    display: none;
    position: relative;
  }
`;
export const Titulo = styled.h1`
  color: white;
  text-transform: uppercase;
  margin-top: 40px;
  margin-left: 15px;
  font-size: 80px;
  font-family: courier, arial, helvetica;
`;
