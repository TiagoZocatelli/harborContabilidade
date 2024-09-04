import {
    ContatoSection,
    FormContainer,
    FormTitle,
    InputGroup,
    Input,
    SubmitButton,
    ContactMessage,
    Highlight
} from "./styles"; // Importando os estilos do styles.js

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
                    <Input type="text" placeholder="Seu Nome" />
                </InputGroup>
                <InputGroup>
                    <Input type="email" placeholder="Seu E-mail" />
                </InputGroup>
                <InputGroup>
                    <Input type="text" placeholder="Nome da Empresa" />
                </InputGroup>
                <InputGroup>
                    <Input type="tel" placeholder="Número de Telefone" />
                </InputGroup>
                <InputGroup>
                    <Input type="text" placeholder="Segmento da Empresa" />
                </InputGroup>
                <SubmitButton>Enviar</SubmitButton>
            </FormContainer>
        </ContatoSection>
    );
};

export default Contato;
