import React from 'react';
import {
  ContainerNosotros,
  ContainerRowNosotros,
  Parrafo,
  SectionNosotrosStyled,
  Title,
} from './NosotrosStyled';

const Nosotros = () => {
  return (
    <SectionNosotrosStyled id="Nosotros">
      <Title> Nosotros</Title>
      <Parrafo>Hacemos estos cubos</Parrafo>
      <ContainerRowNosotros>
        <ContainerNosotros>
          <Parrafo> Hola soy un cubo</Parrafo>
        </ContainerNosotros>
        <ContainerNosotros>
          <Parrafo> Hola soy un cubo 2</Parrafo>
        </ContainerNosotros>
      </ContainerRowNosotros>
    </SectionNosotrosStyled>
  );
};

export default Nosotros;
