import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Servicos from "./components/Servicos";
import QuemSomos from "./components/QuemSomos";
import Contato from "./components/Contato";
import Cliente from "./components/Clientes";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <div id="servicos">
        <Servicos />
      </div>
      <div id="sobre-nos">
        <QuemSomos />
      </div>
      <div id="clientes">
        <Cliente />
      </div>
      <div id="contato">
        <Contato />
      </div >
      <div id="contato">
      <Footer />
      </div>
    </div>
  );
};

export default App;
