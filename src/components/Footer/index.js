import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src="/logo192.png" alt="SuggestionFlix logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
