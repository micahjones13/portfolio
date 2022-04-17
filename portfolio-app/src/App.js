import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Banner from "./components/Banner.js";
import AboutMe from "./components/AboutMe.js";
import Nav from "./components/Nav.js";
import ProjectList from "./projects/ProjectList";
import Articles from "./components/articles/Articles";
import SliderArticle from "./Articles/SliderArticle";

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
          <Route exact path="/articles">
            <Nav />
            <Articles />
          </Route>
          <Route path="/articles/styling-range-input">
            <Nav />
            <SliderArticle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
