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
    background-color: #0D0D0D; /* Fundo mais escuro puxando para o preto */
    color: #ffffff;


    @media (max-width: 768px) {
        height: 100vh;
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
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
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
    height: 240px;
    width: auto;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease-in-out;
    position: relative;
    z-index: 10;

    @media (max-width: 768px) {
        height: 260px;
        margin-bottom: 16px;
    }

    @media (max-width: 480px) {
        height: 260px;
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
    font-size: 3rem;
    font-weight: 800;  /* Um pouco menos pesado para suavizar o visual */
    text-align: center;
    margin-bottom: 20px;
    margin-top: 100px;
    text-transform: uppercase;
    letter-spacing: 2px;  /* Menor espaçamento entre letras */
    line-height: 1.3;  /* Altura de linha mais espaçada para melhorar a leitura */
    animation: ${fadeIn} 1.5s ease;  /* Animação de fade-in com transição mais neutra */

    @media (max-width: 768px) {
        font-size: 1.1rem;
        padding: 6px;
        margin-top: 50px;
    }

    @media (max-width: 380px) {
        margin-top: 120px;
    }
`;

export const SubTitle = styled.p`
    font-family: 'Poppins', sans-serif;
    color: #f0f0f0;
    font-size: 1.8rem;  /* Tamanho de fonte ligeiramente maior para mais legibilidade */
    text-align: center;
    max-width: 700px;  /* Um pouco mais estreito para centralizar melhor o texto */
    margin: 20px auto 50px;  /* Ajustei o espaçamento para centralizar melhor */
    font-weight: 300;  /* Fonte mais leve para dar um toque mais suave */
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);  /* Sombra de texto um pouco mais suave */
    line-height: 1.6;  /* Melhor espaçamento entre linhas para legibilidade */

    @media (max-width: 768px) {
        padding: 8px;
        font-size: 0.9rem;  /* Mantém o texto legível em telas pequenas */
        line-height: 1.4;
        margin-bottom: 25px; /* Ajuste para melhor leitura em telas menores */
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

    @media (max-width: 480px) {
        margin-top: 16px;
        flex-direction: column;
        gap: 10px;
    }
`;

export const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    padding: 16px 45px;  /* Aumentei um pouco o padding para um visual mais robusto */
    font-size: 1.2rem;  /* Aumentei a fonte para mais impacto */
    font-weight: 600;
    color: #fff;
    background-color: #DAA520;  /* Um tom de preto mais suave para dar mais profundidade */
    border: 2px solid transparent;  /* Borda sutil para um visual mais clean */
    border-radius: 16px;  /* Bordas mais arredondadas para um visual moderno */
    cursor: pointer;
    transition: background-color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    display: inline-block;

    &:hover {
        background-color: #444;  /* Leve clareamento no hover */
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);  /* Sombra mais pronunciada no hover */
        transform: translateY(-3px);  /* Elevação suave no hover */
    }

    &:active {
        background-color: #1a1a1a;  /* Fundo mais escuro no clique */
        transform: translateY(0);  /* Remove a elevação ao clicar */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);  /* Sombra reduzida no clique */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3);  /* Realce mais forte ao focar */
    }

    @media (max-width: 768px) {
        padding: 14px 40px;
        font-size: 1.1rem;
        margin-top: 8px;
        padding: 8px 40px;
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
    background-color: #1E1E1E;  /* Preto suave para elegância */
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

    /* Adicionando um gradiente sutil para profundidade */
    background: linear-gradient(135deg, #1E1E1E, #292929);

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
`

export const AsideItem = styled.li`
    border-radius: 15px;
    padding: 10px;
    color: #FFFFFF;  /* Branco puro para o texto */
    font-size: 1.2rem;  /* Fonte maior para maior impacto */
    font-weight: 700;  /* Mais negrito para destaque */
    cursor: pointer;
    position: relative;
    background: linear-gradient(135deg, #1C1C1E, #2C2C2E);  /* Fundo com gradiente suave */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);  /* Sombra forte para profundidade */
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;

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
