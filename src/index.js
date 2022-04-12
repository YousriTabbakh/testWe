import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Header from './component/Header';
import Home from './pages/Home';
import Perso from './pages/Perso';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perso/:id" element={<Perso />} />
    </Routes>
  </BrowserRouter>
);