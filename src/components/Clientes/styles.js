import styled from "styled-components";

// Seção principal de Clientes
export const ClientesSection = styled.section`
  cursor: pointer;
  background-color: #f0f0f5;
  padding: 100px 20px;
  display: flex;
  min-height: 100vh; /* Ocupa no mínimo a altura total da tela */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    padding: 80px 15px;
  }
`;

// Container do conteúdo da seção
export const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
`;

// Título da seção
export const Title = styled.h2`
  font-size: 2.5rem; /* Maior para mais impacto */
  font-weight: bold;
  color: #0a2e65;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 30px;
  }
`;

// Descrição da seção
export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555; /* Tom cinza mais suave */
  max-width: 850px;
  margin: 0 auto 50px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
`;

// Texto destacado (HighlightedText)
export const HighlightedText = styled.span`
  color: #daa520;
  font-weight: bold;
`;

// Container dos cartões de estatísticas
export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 70px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 30px;
    margin-bottom: 50px;
  }
`;

// Cartão de estatísticas individuais
export const StatCard = styled.div`
  background-color: #0a2e65;
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 260px;

  h4 {
    color: #fff;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Número da estatística
export const StatNumber = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: #0a2e65;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
    color: #daa520;
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

// Descrição da estatística
export const StatDescription = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

// Container para os segmentos dos clientes
export const ClientSegmentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

// Cartão de segmentos de clientes
export const Segment = styled.div`
  background: #f0f0f5;
  padding: 25px 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #0a2e65;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #0a2e65; /* Azul acinzentado claro */

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  svg {
    font-size: 2rem;
    color: #daa520;
    margin-bottom: 10px;
  }
`;
