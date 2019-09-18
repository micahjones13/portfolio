import React from "react";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

//local
import "./App.css";
import Banner from "./components/Banner.js";
import AboutMe from "./components/AboutMe.js";

import ProjectList from "./projects/ProjectList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutMe />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
