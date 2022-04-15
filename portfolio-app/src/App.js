import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Banner from "./components/Banner.js";
import AboutMe from "./components/AboutMe.js";

import ProjectList from "./projects/ProjectList";
import Articles from "./components/articles/Articles";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Banner />
            <AboutMe />
            <ProjectList />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
