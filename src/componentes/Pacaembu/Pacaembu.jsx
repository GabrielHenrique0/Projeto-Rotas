  
import React from 'react'
import {Link} from 'react-router-dom'

import Titulo from '../Titulo/Titulo.jsx'

import Home from '../Home/Home.jsx'

import { Route, Switch} from 'react-router'

import './Pacaembu.css'

export default function Pacaembu() {
    return(
        <div>
            <Titulo texto = 'Pacaembu'/> 
            <div className = 'pacaembu'>
                <Switch>
                    <Route exact path = "/" render = {(props) => <Home/>}></Route>

                </Switch>
            </div>
            <div className='menu'>
                <nav className='navMenu'>
                    <ul>
                    <li> <Link to="/"> Voltar </Link> </li>
                        <li> <Link to="#"> PARQUE UNIVERSITÁRIO </Link> </li>
                        <li> <Link to="pacaembu/villadicapri"> VILLA DI CAPRI </Link> </li>
                        <li> <Link to="#"> VITTA RESIDENCIAL </Link> </li>
                        <li> <Link to="#"> QUINTA D’ OESTE </Link> </li>
                        <li> <Link to="#"> VIVA REAL </Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} 