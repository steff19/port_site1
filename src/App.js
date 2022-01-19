import React from 'react';
import Navbar from './compnents/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './compnents/pages/Home'
import Hero from './compnents/Hero';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element = {<Hero></Hero>} />
    </Routes>
    </Router>
     
    </>
  );
}

export default App;
