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
import {
    FaUser, FaEnvelope, FaBuilding, FaPhone, FaBriefcase
} from "react-icons/fa"; // Importando ícones

const Contato = () => {
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
                    <Input type="text" placeholder="Seu Nome" />
                </InputGroup>
                <InputGroup>
                    <FaEnvelope />
                    <Input type="email" placeholder="Seu E-mail" />
                </InputGroup>
                <InputGroup>
                    <FaBuilding />
                    <Input type="text" placeholder="Nome da Empresa" />
                </InputGroup>
                <InputGroup>
                    <FaPhone />
                    <Input type="tel" placeholder="Número de Telefone" />
                </InputGroup>
                <InputGroup>
                    <FaBriefcase />
                    <Input type="text" placeholder="Segmento da Empresa" />
                </InputGroup>
                <InputGroup>
                    <TextArea placeholder="Sua Mensagem" />
                </InputGroup>
                <SubmitButton>Enviar</SubmitButton>
            </FormContainer>
        </ContatoSection>
    );
};

export default Contato;
