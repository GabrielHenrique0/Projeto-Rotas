import React from 'react'

import './villa.css'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Home from '/workspace/Projeto-Rotas/src/componentes/Home/Home.jsx'
import Modelo from '/workspace/Projeto-Rotas/src/componentes/Pacaembu/villadicapri/projeto/Modelo.jsx'
import Pacaembu from '/workspace/Projeto-Rotas/src/componentes/Pacaembu/Pacaembu.jsx'
import Titulo from '/workspace/Projeto-Rotas/src/componentes/Titulo/Titulo.jsx'

export default function Villa() {
    return(
        <div>
            <Titulo texto="Villa Di Capri" />
            <div className = 'Villa'>
                <Switch>
                    <Route exact path = "/home" render = {(props) => <Home/>}></Route>
                    <Route exact path = "/pacaembu" render = {(props) => <Pacaembu/>}></Route>
                    <Route exact path = "/pacaembu/villadicapri/modelo" render = {(props) => <Modelo/>}></Route>
                </Switch>
            </div>
            <div className="menu">
                    <nav className="navMenu">
                        <ul>
                            <li> <Link to="//"> Menu </Link> </li>
                            <li> <Link to="/pacaembu/"> Voltar </Link> </li>
                            <li> <Link to="/contatos"> CORRETOR </Link> </li>
                            <li> <Link to="/contatos"> FINANCIAMENTO </Link> </li>
                            <li> <Link to="/pacaembu/villadicapri/modelo"> PROJETOS MODELO </Link> </li>
                            <li> <Link to="/contatos"> INVESTIMENTO </Link> </li>

                        </ul>
                    </nav>
                </div>
        </div>
    )


}