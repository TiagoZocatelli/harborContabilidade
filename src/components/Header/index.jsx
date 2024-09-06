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
    LogoAside
} from "./styles";
import Logo from "../../assets/Logo.png"; // Substitua pelo caminho correto do seu logo
import BackgroundImage from "../../assets/HarboarHeader4.jpg"; // Imagem de fundo
import { Bars3Icon } from "@heroicons/react/24/outline";  // Ícone de menu alternativo

import {
    FaHome,
    FaServicestack,
    FaUsers,
    FaInfoCircle,
    FaEnvelope,
} from "react-icons/fa";

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
                                <Bars3Icon style={{ width: '32px', height: '32px' }} />
                            </MenuButton>
                            <NavMenu>
                                <NavItem>
                                    <FaHome /> Início
                                </NavItem>
                                <NavItem>
                                    <FaServicestack /> Contábeis
                                </NavItem>
                                <NavItem>
                                    <FaUsers /> Clientes
                                </NavItem>
                                <NavItem>
                                    <FaInfoCircle /> Sobre Nós
                                </NavItem>
                                <NavItem>
                                    <FaEnvelope /> Contato
                                </NavItem>
                            </NavMenu>
                        </HeaderContainer>
                    </Nav>
                    <MainTitle>Sua Contabilidade, Nosso Compromisso</MainTitle>
                    <SubTitle>
                        Transformando números em estratégias para o sucesso do seu negócio.
                    </SubTitle>
                    <ButtonGroup>
                        <Button >Descubra Nossos Serviços</Button>
                        <Button >Solicite um Orçamento</Button>
                    </ButtonGroup>
                </Overlay>
            </HeaderSection>

            <Aside $isOpen={isMenuOpen}>
                <AsideMenu>
                    <LogoAside src={Logo} alt="Logo"/>
                    <AsideItem onClick={toggleMenu}>
                        <FaHome /> Início
                    </AsideItem>
                    <AsideItem onClick={toggleMenu}>
                        <FaServicestack /> Contábeis
                    </AsideItem>
                    <AsideItem onClick={toggleMenu}>
                        <FaUsers /> Clientes
                    </AsideItem>
                    <AsideItem onClick={toggleMenu}>
                        <FaInfoCircle /> Sobre Nós
                    </AsideItem>
                    <AsideItem onClick={toggleMenu}>
                        <FaEnvelope /> Contato
                    </AsideItem>
                </AsideMenu>
            </Aside>

            <SideOverlay $isOpen={isMenuOpen} onClick={toggleMenu} />

        </Layout>
    );
};

export default Header;
