import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
