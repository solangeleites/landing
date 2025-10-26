import { styled } from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  border: 2px solid crimson;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid violet;
  padding: 20px;
  margin: 25px 100px;
`;

export const Titulo = styled.h1`
  font-size: 24px;
`;

export const Subtitulo = styled.p`
  font-size: 18;
`;

export const Boton = styled.button`
  border: 2px solid pink;
  cursor: pointer;
  font-size: 15px;
  padding: 10px 25px;
  background: transparent;
`;
