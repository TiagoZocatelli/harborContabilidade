import styled from "styled-components";

export const ServicosSection = styled.section`
    padding: 80px 20px;
    background-color: #f1f5f9;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`;

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    color: #0A2E65;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.8;
    color: #666;
    max-width: 850px;
    margin: 0 auto 50px;
`;

export const ServicesList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-top: 40px;
`;

export const ServiceCard = styled.div`
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }
`;

export const ServiceTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 700;
    color: #102C57;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const ServiceDescription = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
`;
