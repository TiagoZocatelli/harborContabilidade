import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

export const FooterWrapper = styled.footer`
  background-color: #F1F5F8;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #102C57;
  font-family: 'Poppins', sans-serif;
  flex-wrap: wrap;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }
`;


export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1100px;
  width: 100%;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterSection = styled.div`
  flex: 1; /* Faz com que cada seção ocupe o mesmo espaço */
  min-width: 200px; /* Garante que cada seção tenha uma largura mínima */
  max-width: 350px; /* Evita que a seção cresça demais */

  @media (max-width: 768px) {
    margin-bottom: 30px;
    flex-basis: 100%;
    max-width: 100%; /* Garante que ocupe 100% no mobile */
  }
`;

export const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #DAA520;
  font-weight: bold;
  border-bottom: 2px solid #DAA520;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 8px;
  }
`;

export const FooterInfo = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }
`;

export const InstagramLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #102C57;
  text-decoration: none;
  transition: color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 0 transparent;

  &:hover {
    color: #DAA520;
    box-shadow: 0 2px 0 #DAA520;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  svg {
    margin-right: 8px;
  }
`;

export const WhatsAppLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #102C57;
  text-decoration: none;
  transition: color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 0 transparent;

  &:hover {
    color: #25D366;
    box-shadow: 0 2px 0 #25D366;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  svg {
    margin-right: 8px;
  }
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
  color: #25D366;
  font-size: 1.4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const AddressLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 0 transparent;

  &:hover {
    color: #DAA520;
    box-shadow: 0 2px 0 #DAA520;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  svg {
    margin-right: 8px;
  }
`;

export const EmailLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #102C57;
  text-decoration: none;
  transition: color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 0 transparent;

  &:hover {
    color: #DAA520;
    box-shadow: 0 2px 0 #DAA520;
  }

  /* Remove essa parte, pois o ícone é controlado globalmente */
  svg {
    margin-right: 8px;
    font-size: 1.4rem; /* Garante que o ícone seja visível em todos os tamanhos de tela */
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


export const Divider = styled.div`
  display: none;
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 15px 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const FooterBottom = styled.div`
  background-color: #102C57;
  color: #fff;
  text-align: center;
  padding: 15px;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
`;