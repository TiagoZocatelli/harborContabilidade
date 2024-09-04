import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Servicos from "./components/Servicos";
import QuemSomos from "./components/QuemSomos";
import Contato from "./components/Contato";
import Cliente from "./components/Clientes";
import useAnimateOnScroll from "./hooks/Animete/useAnimateOnScroll";
import { SectionWrapper } from "./styles/animations"; // Importa o estilo de animação
import Footer from "./components/Footer";

const App = () => {
  const [headerRef, headerVisible] = useAnimateOnScroll();
  const [servicosRef, servicosVisible] = useAnimateOnScroll();
  const [contatoRef, contatoVisible] = useAnimateOnScroll();
  const [clienteRef, clienteVisible] = useAnimateOnScroll();
  const [quemSomosRef, quemSomosVisible] = useAnimateOnScroll();
  const [footerRef, footerVisible] = useAnimateOnScroll(); // Adiciona animação para o Footer

  return (
    <div>
      <GlobalStyle />

      <SectionWrapper ref={headerRef} className={headerVisible ? "is-visible" : ""}>
        <Header />
      </SectionWrapper>

      <SectionWrapper ref={servicosRef} className={servicosVisible ? "is-visible" : ""}>
        <Servicos />
      </SectionWrapper>

      <SectionWrapper ref={contatoRef} className={contatoVisible ? "is-visible" : ""}>
        <Contato />
      </SectionWrapper>

      <SectionWrapper ref={clienteRef} className={clienteVisible ? "is-visible" : ""}>
        <Cliente />
      </SectionWrapper>

      <SectionWrapper ref={quemSomosRef} className={quemSomosVisible ? "is-visible" : ""}>
        <QuemSomos />
      </SectionWrapper>

      {/* Adiciona o Footer com a mesma estrutura de animação */}
      <SectionWrapper ref={footerRef} className={footerVisible ? "is-visible" : ""}>
        <Footer />
      </SectionWrapper>
    </div>
  );
};

export default App;
