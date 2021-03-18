import React from 'react';
import {
  ContainerForm,
  TextForm,
  BtnContato,
  ImgContato,
  Formulario,
} from './style';

const Contato = () => {
  const handleClick = () => {
    alert('Obrigada, em breve te retornaremos!');
  };
  return (
    <ContainerForm>
      <div>
        <ImgContato />
      </div>
      <div>
        <Formulario>
          <TextForm for="nome">Nome:</TextForm>
          <input type="text" id="nome" name="usuario_nome" />
        </Formulario>
        <div>
          <TextForm for="email">E-mail:</TextForm>
          <input type="email" id="email" name="usuario_email" />
        </div>
        <div>
          <TextForm for="msg">Mensagem:</TextForm>
          <textarea id="msg" name="usuario_msg"></textarea>
        </div>
      </div>
      <div>
        <BtnContato type="submit" onClick={handleClick}>
          Enviar sua mensagem
        </BtnContato>
      </div>
    </ContainerForm>
  );
};

export default Contato;
