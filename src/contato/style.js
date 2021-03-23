import styled from 'styled-components';

export const ContainerForm = styled.form`
  display: flex;
  background: url('../../img/vaca-contato.png') no-repeat, #fadc70;
  background-size: contain;
  position: relative;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputForm = styled.input`
  border-radius: 5px;
  padding: 5px 70px 2px 2px;
`;
export const TextArea = styled.textarea`
  border-radius: 5px;
  padding: 5px 35px 2px 2px;
`;

//export const TextInform= styled.TextForm

export const TextForm = styled.label`
  color: #32579d;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 10px;
  padding: 4px;
  display: block;
  align-items: center;
`;

export const BtnContato = styled.button`
  background: #2f4ad0;
  margin: 16px 0 50px 0;
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 8px 6px -6px #555;
  margin-left: 30px;

  cursor: pointer;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    background-color: black;
  }
`;
