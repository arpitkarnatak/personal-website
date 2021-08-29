import React, { useState } from 'react'
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Header from './Header/Header.tsx';
import Projects from './Projects/projects';
import Socials from './Socials/Socials';

function App() {
  const [Tabs, setTabs] = useState([true, false, false, false, false])
  return (
    //Animus Studio ki website refer karo
    <div className="App">
      <Header Tabs={Tabs} setTabs={setTabs} />
      <div style={{ minHeight: '80vh' }}>
        {Tabs[0] && <AboutMe/>}
        {Tabs[1] && <Projects />}
      </div>
      <Socials />
    </div>
  );
}

export default App;
