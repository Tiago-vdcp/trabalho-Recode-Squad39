import React from 'react';
import Card from './Card'; // Importamos o componente Card

// Dados dos cards em um array para facilitar a manutenção
const cardData = [
  {
    title: "Entendendo o TEA",
    description: "Conheça mais sobre o Transtorno do Espectro Autista, suas características e como podemos promover um ambiente mais acolhedor.",
    link: "sobre.html#tea",
    linkText: "Saiba Mais"
  },
  {
    title: "Acessibilidade Digital",
    description: "Descubra ferramentas e práticas para tornar a web um lugar mais acessível para pessoas com diversas deficiências.",
    link: "recursos.html#ferramentas-digitais",
    linkText: "Ver Recursos"
  },
  {
    title: "Últimas Notícias",
    description: "Mantenha-se atualizado com os avanços e discussões importantes sobre inclusão e direitos das PCDs e pessoas com TEA.",
    link: "noticias.html",
    linkText: "Ler Notícias"
  }
];

function HighlightsSection() {
  return (
    <section id="destaques">
      <h2>Destaques</h2>
      <div className="card-container">
        {/* Usamos o .map() para renderizar um Card para cada item do array */}
        {cardData.map((card) => (
          <Card
            key={card.title} // A "key" é importante para o React otimizar a renderização de listas
            title={card.title}
            description={card.description}
            link={card.link}
            linkText={card.linkText}
          />
        ))}
      </div>
    </section>
  );
}

export default HighlightsSection;