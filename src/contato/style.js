import styled from 'styled-components';

export const ContainerForm = styled.form`
  background-color: #fadc70;
  display: flex;
`;

export const Formulario = styled.div``;

export const TextForm = styled.label`
  color: #32579d;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px;
`;

export const BtnContato = styled.button`
  background-color: #32579d;
  border-radius: 10px;
  border-style: none;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 20px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  transition: 0.5s all ease-out;
  margin-top: 80%;
  flex-direction: column;
`;

export const ImgContato = styled.div`
  background: url('../../img/vaca-contato.png') no-repeat;
  height: 300px;
  width: 300px;

  position: relative;
`;
