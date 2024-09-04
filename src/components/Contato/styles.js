import styled from "styled-components";
import ContactBackground from "../../assets/contact-bg.jpg"; // Caminho para a imagem de fundo

export const ContatoSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 20px;
    height: 80vh; /* Mantém a altura como 80vh */
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
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        height: auto;
        padding: 40px 20px;
    }
`;

export const FormContainer = styled.div`
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 0.95));
    padding: 30px;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    max-width: 380px; /* Diminuí o tamanho máximo do formulário */
    width: 100%;
    z-index: 2;
    position: relative;
    margin-right: 200px; /* Diminuí o espaçamento da margem */
    animation: fadeIn 1s ease-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    

    @media (max-width: 1024px) {
        margin-right: 0;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        padding: 25px;
    }

    @media (max-width: 480px) {
        padding: 20px;
    }
`;

export const FormTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: rgba(10, 25, 47, 0.85);;
    font-family: 'Poppins', sans-serif;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

export const InputGroup = styled.div`
    margin-bottom: 15px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 2px solid transparent;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    transition: all 0.3s ease;
    outline: none;

    &:focus {
        border-color: #DAA520;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 0 10px rgba(16, 44, 87, 0.5);
    }
`;



export const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #DAA520;
    background: linear-gradient(145deg, #DAA520, #FFC107);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    margin-top: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

    &:hover {
        background: linear-gradient(145deg, #FFC107, #DAA520);
        transform: translateY(-3px);
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

export const ContactMessage = styled.div`
    max-width: 450px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    line-height: 1.6;
    text-align: left;
    z-index: 2;
    position: relative;
    margin-left: 200px;

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
    color: #DAA520;
    font-weight: bold;
`;
