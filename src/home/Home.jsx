import React from 'react';
import { Boton, Hero, HomeContainer, Subtitulo, Titulo } from './HomeStyled';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Nosotros from '../pages/nosotros/Nosotros';

const Home = () => {
  return (
    <>
      <HomeContainer id='Inicio'>
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
      <Nosotros />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
