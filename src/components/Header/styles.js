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
  background: linear-gradient(
    135deg,
    #163965,
    #102c57
  ); /* Gradiente de fundo */
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
  background-color: rgba(
    0,
    0,
    0,
    0.1
  ); /* Fundo mais escuro para destaque da imagem */
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
  background-color: rgba(10, 25, 47, 0.5); /* Fundo puxado para o preto */
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
  height: 100px; /* Altura ajustada */
  position: fixed; /* Sempre fixo no topo */
  top: 0;
  left: 0;
  display: flex;
  align-items: center; /* Centraliza os itens verticalmente */
  justify-content: space-between; /* Espaça os itens horizontalmente */
  background-color: #ffffff; /* Fundo branco */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para separação */
  z-index: 1000; /* Garante que o nav fique acima de outros elementos */
  transition: all 0.3s ease; /* Suaviza mudanças de altura ou opacidade */

  @media (max-width: 768px) {
    height: 80px; /* Altura ajustada para dispositivos menores */
  }

  @media (max-width: 480px) {
    height: 70px; /* Altura ainda menor para dispositivos muito pequenos */
  }
`;

export const HeaderContainer = styled.div`
  font-family: "Poppins", sans-serif;
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
  height: 140px;
  width: auto;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)); /* Sombra leve */
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    height: 130px;
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
  color: #163965; /* Texto escuro para contraste com o fundo branco */
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: 500;
  padding: 12px 0;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color:  #A9782B; /* Dourado no hover */
    transform: translateY(-4px); /* Leve elevação no hover */
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #daa520; /* Linha dourada no hover */
    bottom: 0;
    left: 0;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%; /* Expansão suave da linha */
  }

  &:active {
    color: #ffa500; /* Laranja suave no clique */
    transform: translateY(0); /* Remove elevação */
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const MainTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #ffffff;
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
  font-family: "Poppins", sans-serif;
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
  font-family: "Poppins", sans-serif;
  padding: 14px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(145deg, #A9782B, #A9782B); /* Gradiente dourado */
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

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
  position: fixed; /* Faz o botão ficar fixo no topo */
  top: 20px; /* Ajusta a distância do topo */
  right: 20px; /* Ajusta a distância da direita */
  background: transparent;
  border: none;
  color: #777;
  font-size: 4rem;
  cursor: pointer;
  z-index: 100; /* Garante que o botão ficará acima de outros elementos */

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Aside = styled.aside`
  font-family: "Poppins", sans-serif;
  position: fixed;
  top: 0;
  left: ${(props) => (props.$isOpen ? "0" : "-100%")};
  width: 280px; /* Largura ajustada para um layout compacto */
  height: 100vh;
  background: linear-gradient(
    135deg,
    #ffffff,
    #ffffff
  ); /* Gradiente com base na cor principal */
  padding: 40px 30px;
  transition: left 0.3s ease, box-shadow 0.3s ease;
  z-index: 1200;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: ${(props) =>
    props.$isOpen
      ? "10px 0 30px rgba(0, 0, 0, 0.7)"
      : "none"}; /* Sombra mais forte */
  border-top-right-radius: 25px; /* Bordas arredondadas mais destacadas */
  border-bottom-right-radius: 25px;
  backdrop-filter: blur(5px); /* Efeito de desfoque suave */
  border-left: 2px solid rgba(255, 255, 255, 0.1);
  border-right: 2px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    width: 250px; /* Ajuste para telas menores */
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    width: 220px; /* Ajuste adicional para telas pequenas */
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
  color: #163965; /* Branco puro para o texto */
  font-size: 1.2rem; /* Fonte maior para maior impacto */
  font-weight: 700; /* Mais negrito para destaque */
  cursor: pointer;
  position: relative;
  background: #ffffff; /* Fundo com a cor principal */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinha os itens à esquerda */
  gap: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Sombra forte para profundidade */
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;

  &:hover {
    background:  #163965; /* Leve clareamento no hover */
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    color: #ffffff;
  }
`;

export const SideOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Preto mais opaco */
  z-index: 900;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px); /* Efeito de desfoque suave */
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
`;
