import {
    ContatoSection,
    FormContainer,
    FormTitle,
    InputGroup,
    Input,
    SubmitButton,
    ContactMessage,
    Highlight,
    TextArea
} from "./styles"; // Importando os estilos do styles.js
import { useState } from "react"; // Para gerenciar o estado do formulário
import {
    FaUser, FaEnvelope, FaBuilding, FaPhone, FaBriefcase
} from "react-icons/fa"; // Importando ícones

const Contato = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        segment: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSendEmail = () => {
        const { name, email, company, phone, segment, message } = formData;
        const subject = `Contato de ${name} - ${company}`;
        const body = `
            Nome: ${name}
            Email: ${email}
            Telefone: ${phone}
            Segmento: ${segment}
            Mensagem:
            ${message}
        `;

        // Abrir no Gmail
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=douglas@harborcontabilidade.com.br&su=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, "_blank"); // Abre o Gmail em uma nova aba

        // Zerar os campos do formulário
        setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            segment: "",
            message: ""
        });
    };

    return (
        <ContatoSection>
            <ContactMessage>
                Deseja agendar uma reunião ou saber mais sobre nossos serviços? <br />
                Preencha o formulário e nossa equipe entrará em contato com você rapidamente.
                Estamos prontos para ajudar sua empresa a crescer! <br /><br />
                Entre em contato e <Highlight>transforme seus desafios em oportunidades</Highlight>.
            </ContactMessage>
            
            <FormContainer>
                <FormTitle>Entre em Contato</FormTitle>
                <InputGroup>
                    <FaUser />
                    <Input
                        type="text"
                        name="name"
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup>
                    <FaEnvelope />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Seu E-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup>
                    <FaBuilding />
                    <Input
                        type="text"
                        name="company"
                        placeholder="Nome da Empresa"
                        value={formData.company}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup>
                    <FaPhone />
                    <Input
                        type="tel"
                        name="phone"
                        placeholder="Número de Telefone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup>
                    <FaBriefcase />
                    <Input
                        type="text"
                        name="segment"
                        placeholder="Segmento da Empresa"
                        value={formData.segment}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <InputGroup>
                    <TextArea
                        name="message"
                        placeholder="Sua Mensagem"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                <SubmitButton onClick={handleSendEmail}>Enviar</SubmitButton>
            </FormContainer>
        </ContatoSection>
    );
};

export default Contato;
