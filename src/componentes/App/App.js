import React from 'react'
import './App.css';

import Inicio from '../Inicio/Inicio.jsx'
import Parra from '../Parra/parra.jsx'
import Projeto from '../Projeto/Projeto.jsx'
import Villa from '../Pacaembu/villadicapri/villa.jsx';
import Modelo from '../Pacaembu/villadicapri/projeto/Modelo.jsx';
import Pacaembu from '../Pacaembu/Pacaembu.jsx';
import Perplan from '../Perplan/perplan.jsx'
import Mrv from '../Mrv/mrv.jsx'
import Home from '../Home/Home.jsx'


import { Route, Switch} from 'react-router'


function App() {
  return (
    <div>

      <Inicio />

      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Home/>}></Route>
          <Route exact path = "/parra" render = {(props) => <Parra/>}></Route>
          <Route exact path = "/projeto" render = {(props) => <Projeto/>}></Route>
          <Route exact path = "/pacaembu" render = {(props) => <Pacaembu/>}></Route>
          <Route exact path = "/pacaembu/villadicapri" render = {(props) => <Villa/>}></Route>
          <Route exact path = "/pacaembu/villadicapri/modelo" render = {(props) => <Modelo/>}></Route>
          <Route exact path = "/perplan" render = {(props) => <Perplan/>}></Route>
          <Route exact path = "/mrv" render = {(props) => <Mrv/>}></Route>

        </Switch>

      </main>
      
    </div>
  );
}

export default App;

