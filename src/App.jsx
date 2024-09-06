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
        <Servicos />
        <Contato />
        <Cliente />
        <QuemSomos />
        <Footer />
    </div>
  );
};

export default App;
