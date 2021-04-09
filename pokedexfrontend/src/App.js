import './App.css';
import logo from './assets/images/logo.webp';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Computador from './pages/computador/computador';
import Pokedex from './pages/pokedex/pokedex';


function App() {
  return (
    <Router>
      <div className="App"></div>
      <header className="App-header">
        <img src={logo} className="App-titulo" />
        <nav className="App-navbar">
          <Link to="/" className="App-abas-pokedex">Pokedex</Link>
          <Link to="computador" className="App-abas-computador">Computador</Link>
          <input id="search" placeholder="Pesquisar pokémon..." className="App-busca"></input>
        </nav>
      </header>

      <Switch>
        <Route path="/computador">
          <Computador />
        </Route>
        <Route path="/">
          <Pokedex />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
