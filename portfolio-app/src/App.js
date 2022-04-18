import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./App.css";
import Banner from "./components/Banner.js";
import AboutMe from "./components/AboutMe.js";
import Nav from "./components/Nav.js";
import ProjectList from "./projects/ProjectList";
import Articles from "./components/articles/Articles";
import SliderArticle from "./Articles/SliderArticle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Helmet>
                <title>Micah Jones</title>
              </Helmet>
              <Banner />
              <AboutMe />
              <ProjectList />
            </Route>
            <Route exact path="/articles">
              <Helmet>
                <title>Micah Jones - Articles</title>
              </Helmet>
              <Nav />
              <Articles />
            </Route>
            <Route path="/articles/styling-range-input">
              <Helmet>
                <title>Micah Jones - Slider Styling</title>
                <link
                  rel="canonical"
                  href="https://www.micahjones.dev/styling-range-input"
                />
              </Helmet>
              <Nav />
              <SliderArticle />
            </Route>
          </Switch>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
