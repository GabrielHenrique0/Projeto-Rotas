import React from 'react'
import { Link } from 'react-router-dom'

import Titulo from '../../../Titulo/Titulo.jsx'

import Home from '../../../Home/Home.jsx'

import { Route, Switch} from 'react-router'

import './Modelo.css'

import Villa from '../villa.jsx'

export default function Modelo() {
    return(
        <div>
            <Titulo texto = 'Projeto Modelo'/> 
            <div className = 'Modelo'>
                <Switch>
                    <Route exact path = "/home" render = {(props) => <Home/>}></Route>
                    <Route exact path = "/pacaembu/villadicapri" render = {(props) => <Villa/>}></Route>
                </Switch>
            </div>
            <div className='menu'>
                <nav className='navMenu'>
                    <ul>
                        <li> <Link to="/home"> Menu </Link> </li>
                        <li> <Link to="/pacaembu/villadicapri"> Voltar </Link> </li>
                        <li> <Link to="#"> CASAS </Link></li>
                        <li> <Link to="#"> APARTAMENTOS </Link></li>
                        <li> <Link to="#"> LAZER </Link></li>
                        <li> <Link to="#"> EDÍCULAS </Link></li>
                        <li> <Link to="#"> SOBRADOS </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} 