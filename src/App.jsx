import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
}

export default App;
