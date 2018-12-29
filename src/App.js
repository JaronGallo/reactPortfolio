import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

console.log("Running client/src/App.js--- Router path");
const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Project" component={Project} />
        <Route exact path="/Project2" component={Project2} />
        <Route exact path="/Project3" component={Project3} />
      </Switch>
    </div>
  </Router>;
export default App;
