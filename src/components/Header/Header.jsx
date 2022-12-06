import React from 'react'
import Logo from './assets/netflix.svg'
import './Header.css'
import Lupa from './assets/Lupa.svg'
import Sino from './assets/Sino.png'

export const Header = () => {
    return (
        <header className='black'>
            <div className='header--logo'>
                <img src={Logo} width="95px" alt="Netflix" />
            </div>
            <div className="header--menu-container">
                <ul className="header--menu">
                    <li><a href="/" className="header--menu-item"><span className='Active'>Início</span></a></li>
                    <li><a href="/" className="header--menu-item">Séries</a></li>
                    <li><a href="/" className="header--menu-item">Filmes</a></li>
                    <li><a href="/" className="header--menu-item">Bombando</a></li>
                    <li><a href="/" className="header--menu-item">Minha Lista</a></li>
                    <li><a href="/" className="header--menu-item">Navegar por idiomas</a></li>
                </ul>
            </div>
            <div className="header--icons-container">
                <ul className="header--icons">
                    <img src={Lupa} style={{ paddingRight: "16px" }} alt="" />
                    <span className="Kids">Infantil</span>
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
