import React from 'react';
import {
  ContainerLinks,
  NavbarContainer,
  Logo,
  NavlinkStyled,
} from '../navbar/NavbarStyled';

const Navbar = () => {

  return (
    //este es el contenedor del navbar
    <NavbarContainer>
      <Logo href="/">Logo</Logo>
      <ContainerLinks>
        <NavlinkStyled href='#Inicio' > Inicio</NavlinkStyled>
        <NavlinkStyled href='#Nosotros' > Nosotros</NavlinkStyled>
        <NavlinkStyled href='#Contacto' >Contacto </NavlinkStyled>
      </ContainerLinks  >
    </NavbarContainer>
  );
};

export default Navbar;
