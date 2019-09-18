import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

//local
import './App.css';
import Banner from './components/Banner.js';
import AboutMe from './components/AboutMe.js';

import ProjectList from './projects/ProjectList';

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutMe />
     
      <ProjectList />
    </div>
  );
}

export default App;
