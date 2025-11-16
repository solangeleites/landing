import React from 'react'
import { ContainerLinks, NavbarContainer, Logo, Links } from '../navbar/NavbarStyled'


const Navbar = () => {
  return (
    //este es el contenedor del navbar
    <NavbarContainer>
      <Logo>Logo</Logo>
      <ContainerLinks>
        <Links href="">Link 1</Links>
        <Links href="">Link 2</Links>
        <Links href="">Link 3</Links>
        <Links href="">Link 4</Links>
      </ContainerLinks>
    </NavbarContainer>
  );
}


export default Navbar
