import React, { useState, useEffect } from 'react';

function Footer() {
  // Estado para controlar o tamanho da fonte (começa em 16px)
  const [fontSize, setFontSize] = useState(16);

  // useEffect para aplicar a mudança de fonte no corpo do documento
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]); // Este efeito roda sempre que o estado 'fontSize' mudar

  const increaseFontSize = () => {
    setFontSize(currentSize => currentSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(currentSize => currentSize - 1);
  };

  const resetFontSize = () => {
    setFontSize(16); // Valor padrão
  };

  return (
    <footer>
      <div className="container">
        <p>© RECODE PRO IA 2025 *** Inclusão TEA e PCD *** Todos os direitos reservados.</p>
        <div className="accessibility-tools">
          <button id="aumentar-texto" onClick={increaseFontSize}>Aumentar Fonte</button>
          <button id="diminuir-texto" onClick={decreaseFontSize}>Diminuir Fonte</button>
          <button id="resetar-texto" onClick={resetFontSize}>Restaurar Fonte</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;