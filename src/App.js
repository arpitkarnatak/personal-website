import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Header from './Header/Header.tsx';
import Projects from './Projects/projects';
import Skills from './Skills/skills';
import Socials from './Socials/Socials';
import WorkEx from './Work/work';

function App() {
  return (
    //Animus Studio ki website refer karo
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/work' component={WorkEx} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/' component={AboutMe} />
        </Switch>
        <Socials />
      </BrowserRouter>
    </div>
  );
}

export default App;
