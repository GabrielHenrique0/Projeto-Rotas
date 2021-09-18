import React from 'react'

import './villa.css'

import Titulo from '/workspace/Projeto-Rotas/src/componentes/Titulo/Titulo.jsx'

import { Link } from 'react-router-dom'
export default function Villa() {
    return (
        <div>
            <Titulo texto="Villa Di Capri" />
            <div className="menu">
                    <nav className="navMenu">
                        <ul>
                            <li> <Link to="//"> Menu </Link> </li>
                            <li> <Link to="/contatos"> Voltar </Link> </li>
                            <li> <Link to=""> PARQUE UNIVERSITÁRIO </Link> </li>
                            <li> <Link to="pacaembu/villadicapri"> VILLA DI CAPRI </Link> </li>
                            <li> <Link to="/contatos"> VITTA RESIDENCIAL </Link> </li>
                            <li> <Link to="/contatos"> QUINTA D’ OESTE </Link> </li>
                            <li> <Link to="/contatos"> VIVA REAL </Link> </li>

                        </ul>
                    </nav>
                </div>
        </div>
    )


}