import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function  Routes() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/404" element={<h1>404 PAGE NOT FOUND</h1>}></Route>
        </Switch>
      </Router>
    );
  }
  
  export default Routes;
  