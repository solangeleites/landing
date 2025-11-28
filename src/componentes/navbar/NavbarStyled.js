import { NavLink } from 'react-router-dom';
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

export const Logo = styled.a`
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid green;
  gap: 50px;
`;

export const NavlinkStyled = styled.a`
  text-decoration: none;
  &.active {
    font-weight:bolder;
    color: violet;
  }
`;
