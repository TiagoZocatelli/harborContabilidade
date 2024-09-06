import styled from "styled-components";

// Seção principal de Clientes
export const ClientesSection = styled.section`
    background-color: #ffffff;  /* Fundo branco */
    padding: 100px 20px;
    display: flex;
    height: 110vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
        height: auto;
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
    font-size: 2.2rem;  /* Aumentado ligeiramente para mais impacto */
    font-weight: bold;
    color: #0A2E65;  /* Azul mais suave */
    margin-bottom: 50px;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 40px;
    }
`;

// Descrição da seção
export const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.7;
    color: #444;  /* Tom cinza para uma leitura mais confortável */
    max-width: 850px;
    margin: 0 auto 50px;
    font-weight: 300;  /* Texto mais leve para suavidade */

    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 40px;
    }
`;

// Texto destacado (HighlightedText)
export const HighlightedText = styled.span`
    color: #DAA520;  /* Laranja suave */
    font-weight: bold;
`;

// Container dos cartões de estatísticas
export const StatsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;  /* Espaçamento maior entre os cartões */
    margin-bottom: 70px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
        margin-bottom: 50px;
    }
`;

// Cartão de estatísticas individuais
export const StatCard = styled.div`
    background-color: #f9f9f9;  /* Fundo claro e limpo */
    padding: 10px 30px;
    border-radius: 15px;  /* Bordas mais suaves */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);  /* Sombra leve para profundidade */
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);  /* Sombra mais pronunciada no hover */
    }

    @media (max-width: 768px) {
        padding: 30px;
    }
`;

// Número da estatística
export const StatNumber = styled.h3`
    font-size: 2.8rem;  /* Maior para mais impacto */
    font-weight: 700;
    color: #0A2E65;  /* Azul para manter a harmonia com o título */

    @media (max-width: 768px) {
        font-size: 2.4rem;
    }
`;

// Descrição da estatística
export const StatDescription = styled.p`
    font-size: 1.1rem;
    color: #666;  /* Cinza suave */
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

// Container para os segmentos dos clientes
export const ClientSegmentsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-top: 60px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

// Cartão de segmentos de clientes
export const Segment = styled.div`
    background-color: #f9f9f9;
    padding: 20px 20px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }

    h3 {
        font-size: 1.7rem;
        font-weight: 600;
        color: #0A2E65;
        margin-bottom: 15px;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 1.1rem;
        color: #666;
        line-height: 1.6;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`;
