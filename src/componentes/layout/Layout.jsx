import React from 'react';
import Navbar from '../Navbar/navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar>
        <div>{children}</div>
      </Navbar>
    </>
  );
};

export default Layout;
