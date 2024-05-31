import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';
import Logement from './components/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/logement/:id" element={<Logement />} />
      </Routes>
    </Router>
  </React.StrictMode>
);