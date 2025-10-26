import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../componentes/Layout/layout';
import Home from '../home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
