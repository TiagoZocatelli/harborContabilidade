import styled from "styled-components";
import QuemSomosBackground from "../../assets/quem-somos-bg.jpg";

export const QuemSomosSection = styled.section`
    padding: 80px 20px;
    background: url(${QuemSomosBackground}) no-repeat center center;
    background-size: cover;
    color: #ffffff;
    text-align: center;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;

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
        padding: 60px 15px;
    }
`;

export const QuemSomosTitle = styled.h2`
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 40px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFD700;

    @media (max-width: 768px) {
        font-size: 2.4rem;
        margin-bottom: 30px;
    }
`;

export const QuemSomosDescription = styled.p`
    font-size: 1.4rem;
    line-height: 1.8;
    max-width: 900px;
    margin: 0 auto 40px;
    color: #e0e0e0;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 30px;
    }
`;

export const Highlight = styled.span`
    color: #FFD700;
    font-weight: bold;
`;

export const QuemSomosContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 0 15px;
    }
`;

