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
} from "./styles"; 
import { useState } from "react"; 
import { 
    FaUser, FaEnvelope, FaBuilding, FaPhone, FaBriefcase 
} from "react-icons/fa"; 
import emailjs from '@emailjs/browser';

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

    const onSubmit = async (e) => {
        e.preventDefault();

        if (formData.name === '' || formData.email === '' || formData.message === '') {
            alert("Preencha todos os campos obrigatórios");
            return;
        }

        const templateParams = {
            from_name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            segment: formData.segment,
            message: formData.message
        };

        try {
            const response = await emailjs.send(
                "service_inngjzd",
                "template_wa9z12n",
                templateParams,
                "V9GAmXu90Dgj7ZrIg"
            );
            console.log("EMAIL ENVIADO", response.status, response.text);
            alert("E-mail enviado com sucesso!");
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                segment: "",
                message: ""
            });
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error);
            alert("Erro ao enviar e-mail. Tente novamente mais tarde.");
        }
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
                <SubmitButton onClick={onSubmit}>Enviar</SubmitButton>
            </FormContainer>
        </ContatoSection>
    );
};

export default Contato;
