import React from 'react';

function SummarySection({ id, title, children }) {
  return (
    <section id={id} className="resumo-secao">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default SummarySection;