import styled from "styled-components";
import ContactBackground from "../../assets/contact-bg.jpg"; // Caminho para a imagem de fundo

export const ContatoSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%; /* Altura total da tela */
  width: 100%; /* Largura total da tela */
  padding: 80px 30px;
  background: url(${ContactBackground}) no-repeat center center;
  background-size: cover;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo mais sutil */
    z-index: 1;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 60px 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    height: 100vh;
  }
`;


export const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.85); /* Fundo mais claro */
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  max-width: 400px; /* Máximo de 400px */
  width: 100%; /* Ajusta para ocupar 100% do espaço disponível */
  z-index: 2;
  position: relative;
  margin-right: 200px;
  animation: fadeIn 0.7s ease-out;
  backdrop-filter: blur(8px);

  @media (max-width: 1024px) {
    max-width: 90%; /* Evita ultrapassar os limites do container */
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    max-width: 95%; /* Ajusta para telas menores */
    padding: 20px;
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Usa todo o espaço disponível */
    padding: 15px;
  }
`;


export const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: rgba(10, 25, 47, 0.85);
  font-family: 'Poppins', sans-serif;
  text-align: center;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    left: 10px;
    color: rgba(10, 25, 47, 0.7);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 40px;
  border: none;
  border-radius: 8px;
  background-color: rgba(240, 240, 240, 0.9);
  font-size: 16px; /* Definindo o tamanho da fonte para evitar o zoom */
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;

  &:focus {
    border-color: #DAA520;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 8px  #A9782B;
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 8px 35px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 40px;
  border: none;
  border-radius: 8px;
  background-color: rgba(240, 240, 240, 0.9);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  font-size: 16px; /* Definindo o tamanho da fonte para evitar o zoom */
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  resize: none;
  height: 100px;

  &:focus {
    border-color: #DAA520;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 8px  #A9782B;
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 8px 35px;
  }
`;


export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background:  #A9782B;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #DAA443;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

export const ContactMessage = styled.div`
  max-width: 500px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  line-height: 1.4;
  text-align: left;
  z-index: 2;
  position: relative;
  margin-left: 180px;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Highlight = styled.span`
  color:  #A9782B;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #0096C7;
  }
`;
