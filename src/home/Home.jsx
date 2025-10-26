import React from 'react';
import { Boton, Hero, HomeContainer, Subtitulo, Titulo } from './HomeStyled';
import Section from '../section/Section';

const Home = () => {
  return (
    <>
      <HomeContainer>
        Imagen de fondo
        <Hero>
          <Titulo>Sección de inicio</Titulo>
          <Subtitulo>
            {' '}
            Lorem ipsum dolor, adipisicing elit. maiores sunt totam. Rem, id.
            Laudantium aspernatur laboriosam odio, doloribus quod praesentium
            molestiae distinctio sunt ipsa ullam vero voluptatibus.
          </Subtitulo>
        </Hero>
        <Boton> Call to action</Boton>
      </HomeContainer>
      <Section />
    </>
  );
};

export default Home;
