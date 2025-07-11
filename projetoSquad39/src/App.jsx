// src/App.jsx

// Apague as importações de logo e o useState que não serão usados agora
import Header from './components/Header';
import IntroductionSection from './components/IntroductionSection';
import HighlightsSection from './components/HighlightsSection';
import SummarySection from './components/SummarySection';
import Footer from './components/Footer';

// Mova seu CSS para a pasta src e importe-o aqui
import './App.css'; 

function App() {
  return (
    // React Fragments (<>) permitem agrupar múltiplos elementos sem adicionar um nó extra ao DOM
    <>
      <Header />

      <main className="container">
        <IntroductionSection />
        <HighlightsSection />

        <SummarySection id="sobre-pcd-geral" title="Sobre PCDs em Geral">
          <p>
            O conceito de pessoa com deficiência (PCD) abrange diversos aspectos da vida, como a mobilidade, a comunicação e a interação social. Aqui buscamos promover a inclusão e conscientizar sobre a importância de garantir acessibilidade para todos. <a href="sobre.html">Leia mais...</a>
          </p>
        </SummarySection>

        <SummarySection id="noticias-rapidas" title="Notícias Rápidas">
          <ul>
            <li><a href="noticias.html#lei-transporte">Novo projeto de acessibilidade na cidade avança</a></li>
            <li><a href="noticias.html#inclusao-digital-dv">Inclusão digital para pessoas com deficiência visual ganha destaque</a></li>
            <li><a href="noticias.html#conscientizacao-tea">Campanha de conscientização sobre TEA é lançada nacionalmente</a></li>
          </ul>
        </SummarySection>

        <SummarySection id="recursos-uteis" title="Recursos Úteis">
          <ul>
            <li><a href="recursos.html#leitores-tela">Leitores de tela gratuitos</a></li>
            <li><a href="recursos.html#ferramentas-tea">Ferramentas de apoio para TEA</a></li>
            <li><a href="recursos.html#acessibilidade-web">Diretrizes de acessibilidade para sites</a></li>
          </ul>
        </SummarySection>
        
      </main>

      <Footer />
    </>
  );
}

export default App;
