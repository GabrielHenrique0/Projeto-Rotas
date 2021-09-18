import React from 'react'
import {Link} from 'react-router-dom'


import './Inicio.css'

export default function Inicio() {
    return(
        <div className='menu'>
            <nav className='navMenu'>
                <ul>
                    <li> <Link to="/"> HOME </Link> </li>
                    <li> <Link to="/parra"> Parra </Link> </li>
                    <li> <Link to="/projeto"> Projeto </Link> </li>
                    <li> <Link to="/pacaembu"> Pacaembu </Link> </li>
                    <li> <Link to="/perplan"> Perplan </Link> </li>
                    <li> <Link to="/mrv"> MRV </Link> </li>
                </ul>
            </nav>
        </div>
    )
} 
