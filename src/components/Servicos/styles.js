import styled from "styled-components";

export const ServicosSection = styled.section`
    padding: 100px 20px;
    background: linear-gradient(135deg, #f0f0f5, #ffffff);
    text-align: center;
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow: hidden;
`;

export const TitleIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const Title = styled.h2`
    font-size: 2.8rem;
    font-weight: 700;
    color: rgba(10, 25, 47, 0.9);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 1024px) {
        font-size: 2.4rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.8;
    color: #333333;
    max-width: 800px;
    margin: 0 auto 50px;
    padding: 0 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ServicesList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 40px;
`;

export const ServiceCard = styled.div`
    background: #ffffff; /* Fundo branco suave */
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); /* Sombra mais leve */
    color: #0A192F;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px); /* Efeito de hover */
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Sombra mais pronunciada no hover */
    }
`;

export const ServiceTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
    color: #DAA520; /* Cor de texto laranja */
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
`;

export const ServiceDescription = styled.p`
    font-size: 1rem;
    color: #666666; /* Texto cinza mais suave */
    line-height: 1.6;
`;

export const Icon = styled.div`
    margin-bottom: 20px;
    color: #fff;
    background-color: #DAA520;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b8860b; /* Ligeira mudança de cor no hover */
    }
`;
