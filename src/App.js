import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home/home";
import Somos from "./pages/nosotros/nosotros";
import Contacto from "./pages/contacto/contacto";
import Login from "../src/login/login";
import Dashboard from "../src/dashboard/dashboard";
import Table from "../src/table/table.jsx"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/somos">
          <Somos />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
