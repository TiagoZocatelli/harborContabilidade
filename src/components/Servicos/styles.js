import styled from "styled-components";

export const ServicosSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #f0f0f5, #f0f0f5);
  text-align: center;
  font-family: "Poppins", sans-serif;
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
  font-size: 3rem;
  font-weight: 700;
  color: #0a2e65;
  text-transform: uppercase;
  
  @media (max-width: 1024px) {
    font-size: 2.6rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
  line-height: 2;
  color: #555555;
  max-width: 800px;
  margin: 0 auto 50px;
  padding: 0 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;


export const ServiceCard = styled.div`
  cursor: pointer;
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  color: #0a192f;
  position: relative;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
    background: linear-gradient(145deg, #ffffff, #f0f4f8);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0a192f;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #444444;
  line-height: 1.8;
`;

export const Icon = styled.div`
  margin-bottom: 20px;
  color: #fff;
  background-color: #0a2e65;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;
`;
