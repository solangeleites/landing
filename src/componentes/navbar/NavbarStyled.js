import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: 100px;
  border: 2px solid orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  position: sticky;
  top: 0;
`;

export const Logo = styled.h1`
  font-size: 18px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid green;
  gap: 50px;
`;

export const Links = styled.a`
  text-decoration: none;
`;
