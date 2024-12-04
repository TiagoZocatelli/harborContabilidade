import { useState } from "react";
import {
  Layout,
  HeaderSection,
  Overlay,
  Nav,
  HeaderContainer,
  LogoImage,
  NavMenu,
  NavItem,
  MainTitle,
  SubTitle,
  ButtonGroup,
  Button,
  MenuButton,
  Aside,
  AsideMenu,
  AsideItem,
  SideOverlay,
  LogoAside,
} from "./styles";
import Logo from "../../assets/Logo.png"; // Substitua pelo caminho correto do seu logo
import BackgroundImage from "../../assets/HarboarHeader.jpg"; // Imagem de fundo
import { Bars3Icon } from "@heroicons/react/24/outline"; // Ícone de menu alternativo

import {
  FaHome,
  FaServicestack,
  FaUsers,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Layout>
      <HeaderSection $backgroundImage={BackgroundImage}>
        <Overlay>
          <Nav>
            <HeaderContainer>
              <LogoImage src={Logo} alt="Logo" />
              <MenuButton onClick={toggleMenu}>
                <Bars3Icon style={{ width: "32px", height: "32px" }} />
              </MenuButton>
              <NavMenu>
                <NavItem>
                  <Link to="header" smooth={true} duration={500}>
                    <FaHome /> Início
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="servicos" smooth={true} duration={500}>
                    <FaServicestack /> Serviços
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="clientes" smooth={true} duration={500}>
                    <FaUsers /> Clientes
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="sobre-nos" smooth={true} duration={500}>
                    <FaInfoCircle /> Sobre Nós
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="contato" smooth={true} duration={500}>
                    <FaEnvelope /> Contato
                  </Link>
                </NavItem>
              </NavMenu>
            </HeaderContainer>
          </Nav>
          <MainTitle>Sua Contabilidade, Nosso Compromisso</MainTitle>
          <SubTitle>
            Transformando números em estratégias para o sucesso do seu negócio.
          </SubTitle>
          <ButtonGroup>
            <Link to="orcamento" smooth={true} duration={500}>
              <Button>Solicite um Orçamento</Button>
            </Link>
          </ButtonGroup>
        </Overlay>
      </HeaderSection>

      <Aside $isOpen={isMenuOpen}>
        <AsideMenu>
          <LogoAside src={Logo} alt="Logo" />
          <AsideItem onClick={toggleMenu}>
            <Link to="/" smooth={true} duration={500}>
              <FaHome /> Início
            </Link>
          </AsideItem>
          <AsideItem onClick={toggleMenu}>
            <Link to="orcamento" smooth={true} duration={500}>
              <FaServicestack /> Serviços
            </Link>
          </AsideItem>
          <AsideItem onClick={toggleMenu}>
            <Link to="clientes" smooth={true} duration={500}>
              <FaUsers /> Clientes
            </Link>
          </AsideItem>
          <AsideItem onClick={toggleMenu}>
            <Link to="sobre-nos" smooth={true} duration={500}>
              <FaInfoCircle /> Sobre Nós
            </Link>
          </AsideItem>
          <AsideItem onClick={toggleMenu}>
            <Link to="contato" smooth={true} duration={500}>
              <FaEnvelope /> Contato
            </Link>
          </AsideItem>
        </AsideMenu>
      </Aside>

      <SideOverlay $isOpen={isMenuOpen} onClick={toggleMenu} />
    </Layout>
  );
};

export default Header;
