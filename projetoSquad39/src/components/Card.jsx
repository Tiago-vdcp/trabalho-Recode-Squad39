import React from 'react';

// Recebemos as propriedades (props) para tornar o card dinâmico
function Card({ title, description, link, linkText }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="btn">{linkText}</a>
    </div>
  );
}

export default Card;