import React from 'react';
import {
  ContainerForm,
  TextForm,
  BtnContato,
  Formulario,
  FormWrapper,
  InputForm,
  TextArea,
} from './style';

const Contato = () => {
  const handleClick = () => {
    alert('Obrigada, em breve te retornaremos!');
  };
  return (
    <ContainerForm>
      <FormWrapper>
        <Formulario id="formulario">
          <TextForm for="nome">Nome:</TextForm>
          <InputForm
            type="text"
            id="nome"
            name="usuario_nome"
            placeholder="Mumu dos Santos"
          />

          <div>
            <TextForm for="email">E-mail:</TextForm>
            <InputForm
              type="email"
              id="email"
              name="usuario_email"
              placeholder="mu@gmail.com"
            />
          </div>
          <div>
            <TextForm for="msg">Mensagem:</TextForm>
            <TextArea
              id="msg"
              name="usuario_msg"
              placeholder="escreva sua mensagem aqui!"
            ></TextArea>
          </div>
          <BtnContato type="submit" onClick={handleClick}>
            Enviar sua mensagem
          </BtnContato>
        </Formulario>
      </FormWrapper>
    </ContainerForm>
  );
};

export default Contato;
