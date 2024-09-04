import styled, { keyframes } from "styled-components";

// Animação para fade-in
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const HeaderSection = styled.header`
    width: 100%;
    height: 80vh;
    background: url(${(props) => props.backgroundImage}) no-repeat center center;
    background-size: cover;  /* Garante que a imagem cobre toda a área */
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 100vh;
    }

    @media (max-width: 480px) {
        height: 100vh;
    }
`;



export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(16, 46, 87, 0.8);  /* Overlay azul petróleo */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 1s ease-out;  /* Animação de fade-in */
`;

export const Nav = styled.nav`
    width: 100%;
    padding: 20px 20px;  /* Ajuste de padding para evitar sobreposição */
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between; /* Alinha logo à esquerda e menu à direita */
    align-items: center;

    @media (max-width: 768px) {
        padding: 15px 20px;
    }
`;
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Garante que logo e menu fiquem em extremos opostos */
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto; /* Centraliza o container no meio da tela */
    position: relative;  /* Permite o uso de z-index */
    z-index: 5;  /* Garante que os elementos do header, incluindo a logo, fiquem sobre o fundo */

    @media (max-width: 768px) {
        align-items: center;
        gap: 20px;
        margin-right: 16px;
    }
`;


export const LogoImage = styled.img`
    height: 180px;  /* Tamanho adequado para logo */
    width: auto;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));  /* Adiciona sombra para destacar */
    transition: transform 0.3s ease-in-out;
    position: relative;  /* Permite o uso de z-index */
    z-index: 10;  /* Garante que a logo ficará sobre o background */

    @media (max-width: 768px) {
        height: 140px;
    }

    @media (max-width: 480px) {
        height: 160px;
    }
`;


export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    gap: 30px;
    margin-left: auto; /* Move os itens do menu para a direita */

    @media (max-width: 768px) {
        display: none;
    }
`;


export const NavItem = styled.li`
    color: #FFFFFF;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: #DAA520;  /* Dourado metálico */
        transform: translateY(-3px);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const MainTitle = styled.h1`
    color: #DAA520;
    font-size: 4rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: ${fadeIn} 1.5s ease-out;

    @media (max-width: 768px) {
        max-width: 100%;
        font-size: 1.5rem;
    }
`;

export const SubTitle = styled.p`
    color: #FFFFFF;
    font-size: 1.5rem;
    text-align: center;
    max-width: 800px;
    margin-bottom: 40px;
    font-weight: 400;
    animation: ${fadeIn} 2s ease-out;

    @media (max-width: 768px) {
        max-width: 100%;
        font-size: 0.9rem;
        margin-bottom: 30px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const Button = styled.button`
    padding: 15px 40px;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => (props.primary ? "#004D61" : "#DAA520")};
    background-color: ${(props) => (props.primary ? "#DAA520" : "transparent")};
    border: 2px solid #DAA520;
    border-radius: 50px;  /* Borda mais arredondada para um visual moderno */
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  /* Sombra para um efeito mais profissional */
    
    &:hover {
        background-color: ${(props) => (props.primary ? "#FFFFFF" : "#DAA520")};
        color: ${(props) => (props.primary ? "#004D61" : "#FFFFFF")};
        transform: translateY(-3px);  /* Efeito de elevação ao passar o mouse */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);  /* Aumenta a sombra ao hover */
    }

    &:active {
        transform: translateY(1px);  /* Simula o clique no botão */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Reduz a sombra ao clicar */
    }

    @media (max-width: 768px) {
        padding: 12px 30px;
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
`;

export const MenuButton = styled.button`
    display: none;
    background: transparent;
    border: none;
    color: #FFFFFF;
    font-size: 2rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        margin-left: auto;  /* Move o botão de menu para o extremo direito */
    }
`;

export const Aside = styled.aside`
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? '0' : '-100%')};
    width: 300px;  /* Aumenta um pouco a largura para dar mais espaço */
    height: 100vh;
    background-color: rgba(16, 44, 87, 0.95);  /* Um tom mais escuro e opaco */
    padding: 30px 20px;
    transition: left 0.4s ease, box-shadow 0.3s ease;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    box-shadow: ${(props) => (props.isOpen ? '4px 0 12px rgba(0, 0, 0, 0.3)' : 'none')};  /* Sombra suave ao abrir */
    border-top-right-radius: 12px;  /* Bordas arredondadas no topo para suavidade */
    border-bottom-right-radius: 12px;  /* Bordas arredondadas na parte inferior */

    @media (min-width: 768px) {
        display: none;
    }
`;
export const AsideMenu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 25px;  /* Aumenta o espaçamento entre os itens para clareza */
`;

export const AsideItem = styled.li`
    background-color: rgba(16, 55, 87, 0.95);  /* Um tom de azul mais suave */
    border-radius: 24px;
    padding: 16px;
    text-align: center;
    color: #FFFFFF;
    font-size: 1.3rem;  /* Tamanho de fonte maior para clareza */
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
        color: #DAA520;
        background-color: rgba(20, 60, 95, 1);
        transform: translateY(-2px);  /* Leve elevação no hover */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  /* Sombra ao passar o mouse */
    }
`;

export const SideOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);  /* Um overlay mais escuro */
    z-index: 900;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);  /* Aplica um leve desfoque no fundo */
`;
