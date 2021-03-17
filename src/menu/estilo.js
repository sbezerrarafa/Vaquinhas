import styled from 'styled-components';

export const Menula = styled.ul`
  display: flex;
  justify-content: flex-end;
  background-color: #f5f5f5;
  list-style: none;
  margin: 0px;
  @media (max-width: 800px) {
    display: none;
    position: relative;
  }
`;

export const LiMenu = styled.li`
  padding: 25px;
  list-style: none;
  color: #32579d;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Logo = styled.div`
  position: absolute;
  top: 15px;
  margin-left: 70px;
  transform: translateX(-50%);
  width: 100px;
  height: 70px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px 20px 20px 20px;
  opacity: 1;
  background: url('../../img/logo-vaca.png') no-repeat;
`;
