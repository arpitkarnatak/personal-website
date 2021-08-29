import React, { useState } from 'react'
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Header from './Header/Header.tsx';
import Socials from './Socials/Socials';

function App() {


  return (
    //Animus Studio ki website refer karo
    <div className="App">
      <Header />
      <div style={{ minHeight: '80vh' }}>
        <AboutMe />
      </div>
      <Socials />
    </div>
  );
}

export default App;
