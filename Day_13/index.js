import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Register from './Register.js';
import Login from './Login.js';

import Nav from './Nav.js';
import Side from './Side.js';
import Footer from './Footer.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>

  <BrowserRouter>
    <Nav />
    <Side/>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<About />} path='/about' />
      <Route element={<Contact />} path='/contact' />
      <Route element={<Register />} path='/register' />
      <Route element={<Login />} path='/login' />
    </Routes>
  </BrowserRouter>

  <Footer/>

  </>

);