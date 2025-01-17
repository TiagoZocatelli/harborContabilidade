import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Servicos from "./components/Servicos";
import QuemSomos from "./components/QuemSomos";
import Contato from "./components/Contato";
import Cliente from "./components/Clientes";
import Footer from "./components/Footer";
import { WhatsAppIcon } from "./styles/whats";
import LogoWhats from "../public/whats.svg";

const App = () => {

  return (
    <div>
      <GlobalStyle />
      <WhatsAppIcon>
        <a
          href="https://wa.me/554433542844"
          target="_blank"
          rel="noopener noreferrer"
          title="Clique para entrar em contato via WhatsApp"
        >
          <img src={LogoWhats} alt="WhatsApp" />
        </a>
      </WhatsAppIcon>
       <div id="header">
       <Header />
       </div>
      <div id="servicos">
        <Servicos />
      </div>
      <div id="sobre-nos">
        <QuemSomos />
      </div>
      <div id="clientes">
        <Cliente />
      </div>
      <div id="orcamento">
        <Contato />
      </div >
      <div id="contato">
      <Footer />
      </div>
    </div>
  );
};

export default App;
