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
    
    @media (max-width: 768px) {
        height: 100vh;
    }
`;

export const HeaderSection = styled.header`
    width: 100%;
    height: 80vh;
    background: url(${(props) => props.$backgroundImage}) no-repeat center center;
    background-size: cover;
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
    background-color: rgba(10, 25, 47, 0.85);  /* Preto com toque de azul marinho */


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
    font-family: 'Poppins', sans-serif;  /* Fonte personalizada */
    display: flex;
    justify-content: center; /* Centraliza horizontalmente o conteúdo */
    align-items: center;  /* Centraliza verticalmente o conteúdo */
    width: 100%;
    max-width: 1200px;
    margin: 0 auto; /* Centraliza o container no meio da tela */
    position: relative;
    z-index: 5;

    @media (max-width: 768px) {
        justify-content: center;  /* Garante que o logo esteja centralizado em telas menores */
        margin-right: 0;  /* Remove o espaço extra à direita em telas menores */
    }
`;



export const LogoImage = styled.img`
    height: 220px;  /* Tamanho adequado para logo */
    width: auto;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));  /* Adiciona sombra para destacar */
    transition: transform 0.3s ease-in-out;
    position: relative;  /* Permite o uso de z-index */
    z-index: 10;  /* Garante que a logo ficará sobre o background */

    @media (max-width: 768px) {
        height: 140px;
    }

    @media (max-width: 480px) {
        height: 250px;
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
    font-family: 'Poppins', sans-serif;  /* Fonte personalizada */
    color: #DAA520;
    font-size: 3.5rem;  /* Tamanho maior para destaque */
    font-weight: 900;  /* Peso forte para mais impacto */
    text-align: center;
    margin-bottom: 20px;
    margin-top: 150px;
    text-transform: uppercase;
    letter-spacing: 3px;  /* Espaçamento entre letras para elegância */
    animation: ${fadeIn} 1.5s ease-out;
    line-height: 1.2;  /* Ajuste de altura da linha para melhorar a leitura */

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-top: 0;
    }

    @media (max-width: 480px) {
        font-size: 1.6rem;
    }
`;

export const SubTitle = styled.p`
    font-family: 'Poppins', sans-serif;  /* Fonte personalizada */
    color: #f0f0f0;  /* Cor mais clara */
    font-size: 1.7rem;
    text-align: center;
    max-width: 800px;
    margin-bottom: 40px;
    font-weight: 400;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);  /* Sombra suave */
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
    font-family: 'Poppins', sans-serif;  /* Fonte personalizada */
    padding: 15px 40px;
    font-size: 1.2rem;
    font-weight: 700;  /* Mais negrito para maior destaque */
    color: #ffffff;
    background: linear-gradient(135deg, #DAA520 0%, #FFB300 100%);  /* Gradiente suave */
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);  /* Sombra um pouco mais forte para mais profundidade */
    
    &:hover {
        background: linear-gradient(135deg, #FFB300 0%, #DAA520 100%);
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);  /* Sombra maior no hover */
        filter: brightness(1.05);  /* Efeito de brilho leve no hover */
    }

    &:active {
        transform: translateY(2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  /* Sombra reduzida ao clicar */
    }

    @media (max-width: 768px) {
        padding: 12px 30px;
        font-size: 1rem;
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        padding: 10px 20px;
        font-size: 0.9rem;
        margin-bottom: 8px;
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
    font-family: 'Poppins', sans-serif;  /* Fonte personalizada */
    position: fixed;
    top: 0;
    left: ${(props) => (props.$isOpen ? '0' : '-100%')};
    width: 300px;
    height: 100vh;
    background-color: rgba(10, 25, 47, 0.85);  /* Preto com toque de azul marinho */
    padding: 30px 20px;
    transition: left 0.4s ease, box-shadow 0.3s ease;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    box-shadow: ${(props) => (props.$isOpen ? '4px 0 12px rgba(0, 0, 0, 0.3)' : 'none')};
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

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
    background-color: rgba(10, 25, 50, 0.85);  /* Tom mais escuro, mas mantendo o azul-petróleo */
    border-radius: 24px;
    padding: 16px;
    text-align: center;
    color: #FFFFFF;
    font-size: 1.3rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
        color: #DAA520;  /* Consistência com o dourado metálico */
        background-color: rgba(20, 60, 95, 1);  /* Tom mais escuro no hover */
        transform: translateY(-2px); 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  
    }
`;

export const SideOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 900;
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
`;
