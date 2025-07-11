import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Bem-vindo ao nosso Espaço sobre TEA e PCDs</h1>
        <nav>
          <ul>
            <li><a href="index.html" className="active">Início</a></li>
            <li><a href="sobre.html">Sobre TEA e PCD</a></li>
            <li><a href="noticias.html">Notícias</a></li>
            <li><a href="recursos.html">Recursos</a></li>
            <li><a href="cadastro.html">Cadastre-se</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;