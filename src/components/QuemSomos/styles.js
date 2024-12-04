import styled from "styled-components";
import QuemSomosBackground from "../../assets/quem-somos-bg.jpg";

export const QuemSomosSection = styled.section`
    width: 100%; /* Ocupa 100% da largura */
    height: 100vh; /* Ocupa 100% da altura da viewport */
    background: url(${QuemSomosBackground}) no-repeat center center;
    background-size: cover;
    color: #ffffff;
    text-align: center;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Alinha os textos no topo */
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 20px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: -1;
    }

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const QuemSomosTitle = styled.h2`
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color:  #A9782B;
    margin-top: 40px; /* Adicionado para evitar sobreposição no topo */

    @media (max-width: 768px) {
        font-size: 2.4rem;
        margin-bottom: 15px;
    }
`;

export const QuemSomosDescription = styled.p`
    font-size: 1.4rem;
    line-height: 1.8;
    max-width: 900px;
    margin: 0 auto 20px;
    color: #e0e0e0;

    @media (max-width: 768px) {
        font-size: 0.9rem;
        margin-bottom: 15px;
    }
`;

export const Highlight = styled.span`
    color: #A9782B;
    font-weight: bold;
`;

export const QuemSomosContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 0 15px;
    }
`;
