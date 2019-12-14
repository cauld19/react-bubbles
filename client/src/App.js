import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage"
// import AddForm from "./components/AddForm"

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path ="/BubblePage" component={BubblePage} />
        {/* <PrivateRoute exact path ="/AddForm" component={AddForm} /> */}
      </div>
    </Router>
  );
}

export default App;
