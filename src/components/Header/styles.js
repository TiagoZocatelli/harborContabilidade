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
    min-height: 100vh;
    background: linear-gradient(135deg, #0A2E65, #102C57); /* Gradiente de fundo */
    color: #ffffff;

    @media (max-width: 768px) {
        height: auto;
    }
`;
export const HeaderSection = styled.header`
    width: 100%;
    height: 100vh;
    background: url(${(props) => props.$backgroundImage}) no-repeat center center;
    background-size: cover;
    background-blend-mode: overlay;
    background-color: rgba(0, 0, 0, 0.6); /* Fundo mais escuro para destaque da imagem */
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
    background-color: rgba(10, 25, 47, 0.50);  /* Fundo puxado para o preto */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 1s ease-out;

    @media (max-width: 768px) {
        padding: 32px;
    }

    @media (max-width: 380px) {
        padding: 16px;
    }
`;

export const Nav = styled.nav`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;


export const LogoImage = styled.img`
    height: 250px;
    width: auto;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
        height: 160px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    gap: 30px;
    margin-left: auto;

    @media (max-width: 768px) {
        display: none;
    }
`;


export const NavItem = styled.li`
    color: #FFFFFF;
    font-size: 1.3rem;
    cursor: pointer;
    font-weight: 500;
    padding: 12px 0;
    position: relative;
    transition: color 0.3s ease, transform 0.3s ease;

    /* Efeito de sombra suave */
    &:hover {
        color: #FFD700;  /* Dourado brilhante e sofisticado */
        transform: translateY(-4px);  /* Leve elevação no hover */
        text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);  /* Sombra suave para destacar */
    }

    /* Linha suave abaixo do texto no hover */
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        background-color: #FFD700;  /* Cor dourada para a linha */
        bottom: 0;
        left: 0;
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: 100%;  /* Expansão suave da linha ao passar o mouse */
    }

    &:active {
        color: #FFA500;  /* Um laranja suave para feedback ao clicar */
        transform: translateY(0);  /* Remove a elevação ao clicar */
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;


export const MainTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: #DAA520;
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
    animation: ${fadeIn} 1.5s ease;

    @media (max-width: 768px) {
        font-size: 1.8rem;
        margin-top: 20px;
    }
`;

export const SubTitle = styled.p`
    font-family: 'Poppins', sans-serif;
    color: #e0e0e0;
    font-size: 1.6rem;
    text-align: center;
    max-width: 700px;
    margin: 20px auto;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1.2rem;
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
    font-family: 'Poppins', sans-serif;
    padding: 14px 40px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(145deg, #DAA520, #DAA520);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-top: 64px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: translateY(2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;



export const MenuButton = styled.button`
    display: none;
    position: fixed;  /* Faz o botão ficar fixo no topo */
    top: 20px;  /* Ajusta a distância do topo */
    right: 20px;  /* Ajusta a distância da direita */
    background: transparent;
    border: none;
    color: #777;
    font-size: 4rem;
    cursor: pointer;
    z-index: 100;  /* Garante que o botão ficará acima de outros elementos */

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
    }
`;


export const Aside = styled.aside`
    font-family: 'Poppins', sans-serif;
    position: fixed;
    top: 0;
    left: ${(props) => (props.$isOpen ? '0' : '-100%')};
    width: 280px;  /* Largura ajustada para um layout compacto */
    height: 100vh;
    background: linear-gradient(135deg, #0a2e65, #0a2e65); /* Gradiente com base na cor principal */
    padding: 40px 30px;
    transition: left 0.3s ease, box-shadow 0.3s ease;
    z-index: 1200;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: ${(props) => (props.$isOpen ? '10px 0 30px rgba(0, 0, 0, 0.7)' : 'none')};  /* Sombra mais forte */
    border-top-right-radius: 25px;  /* Bordas arredondadas mais destacadas */
    border-bottom-right-radius: 25px;
    backdrop-filter: blur(5px);  /* Efeito de desfoque suave */
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    border-right: 2px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
        width: 250px;  /* Ajuste para telas menores */
        padding: 30px 15px;
    }

    @media (max-width: 480px) {
        width: 220px;  /* Ajuste adicional para telas pequenas */
        padding: 20px 10px;
    }
`;

export const AsideMenu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const LogoAside = styled.img`
    width: 100%;
    height: auto;
`;

export const AsideItem = styled.li`
    border-radius: 15px;
    padding: 15px;
    color: #FFFFFF;  /* Branco puro para o texto */
    font-size: 1.2rem;  /* Fonte maior para maior impacto */
    font-weight: 700;  /* Mais negrito para destaque */
    cursor: pointer;
    position: relative;
    background: #0a2e65;  /* Fundo com a cor principal */
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Alinha os itens à esquerda */
    gap: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);  /* Sombra forte para profundidade */
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;

    &:hover {
        background: #0d3c89; /* Leve clareamento no hover */
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
`;

export const SideOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);  /* Preto mais opaco */
    z-index: 900;
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    transition: opacity 0.3s ease;
    backdrop-filter: blur(4px);  /* Efeito de desfoque suave */
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
`;
