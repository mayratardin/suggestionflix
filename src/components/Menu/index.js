import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';

function Menu() {
    return (
        <header className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="SuggestionFlix logo"/>
            </Link>

            <Button as={ Link } className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>


        </header>
    )
}

export default Menu;