import React from 'react';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';

// import ButtonLink from '../components/ButtonLink';

function Menu() {
    return (
        <header className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="SuggestionFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>


        </header>
    )
}

export default Menu;