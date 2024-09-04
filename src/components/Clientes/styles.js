import styled from "styled-components";

// Seção principal de Clientes
export const ClientesSection = styled.section`
    background-color: #f5f8fb;
    padding: 100px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Poppins', sans-serif;

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
    font-size: 3rem;
    font-weight: 800;
    color: #0A2E65;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 30px;
    }
`;

// Descrição da seção
export const Description = styled.p`
    font-size: 1.3rem;
    line-height: 1.8;
    color: #555;
    max-width: 900px;
    margin: 0 auto 50px;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 40px;
    }
`;

// Texto destacado (HighlightedText)
export const HighlightedText = styled.span`
    color: #DAA520;
    font-weight: bold;
`;

// Container dos cartões de estatísticas
export const StatsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
        margin-bottom: 50px;
    }
`;

// Cartão de estatísticas individuais
export const StatCard = styled.div`
    background-color: #fff;
    padding: 30px 20px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

// Número da estatística
export const StatNumber = styled.h3`
    font-size: 2.5rem;
    font-weight: 800;
    color: #0A2E65;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

// Descrição da estatística
export const StatDescription = styled.p`
    font-size: 1rem;
    color: #555;
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

// Container para os segmentos dos clientes
export const ClientSegmentsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-top: 50px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

// Cartão de segmentos de clientes
export const Segment = styled.div`
    background-color: #fff;
    padding: 30px 20px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #0A2E65;
        margin-bottom: 15px;

        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
    }

    p {
        font-size: 1rem;
        color: #666;
        line-height: 1.6;

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }
    }
`;
