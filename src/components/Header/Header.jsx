import React from 'react'
import Logo from './assets/netflix.svg'
import './Header.css'
import Lupa from './assets/Lupa.svg'
import Sino from './assets/Sino.png'

export const Header = ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src={Logo} width="92px" alt="Netflix" />
                </a>
            </div>
            <div className="header--menu-container">
                <ul className="header--menu">
                    <li><a href="/" className="header--menu-item"><span className='Active'>Início</span></a></li>
                    <li><a href="https://www.netflix.com/browse/genre/83" className="header--menu-item">Séries</a></li>
                    <li><a href="https://www.netflix.com/browse/genre/34399" className="header--menu-item">Filmes</a></li>
                    <li><a href="https://www.netflix.com/latest" className="header--menu-item">Bombando</a></li>
                    <li><a href="https://www.netflix.com/browse/my-list" className="header--menu-item">Minha lista</a></li>
                    <li><a href="https://www.netflix.com/browse/original-audio" className="header--menu-item">Navegar por idiomas</a></li>
                </ul>
            </div>
            <div className="header--icons-container">
                <ul className="header--icons">
                    <img src={Lupa} style={{ paddingRight: "16px" }} alt="" />
                    <a href="https://www.netflix.com/Kids" className='Kid'><span className="Kids">Infantil</span></a>
                    <img src={Sino} style={{ marginLeft: "16px" }} width="26px" alt="" />
                </ul>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" width="35px" style={{ borderRadius: "20%" }} alt="Usuário" />
                </a>
            </div>
        </header>
    )
}
