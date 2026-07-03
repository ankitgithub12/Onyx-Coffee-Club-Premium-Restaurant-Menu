import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Route integrates Hero, Specials, Menu grid, About & Contact */}
      <Route path="/" element={
        <>
          <Home />
          <Menu />
        </>
      } />
      
      {/* Dedicated standalone Menu route for scalability */}
      <Route path="/menu" element={<Menu />} />
      
      {/* 404 Fallback page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
