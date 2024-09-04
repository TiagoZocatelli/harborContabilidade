import {
    ServicosSection,
    Title,
    Description,
    ServicesList,
    ServiceCard,
    ServiceTitle,
    ServiceDescription,
} from "./styles"; // Importando os estilos do styles.js
import { FaBuilding, FaFileInvoice, FaCalculator, FaUsers } from "react-icons/fa"; // Ícones

const Servicos = () => {
    return (
        <ServicosSection>
            <Title>Nossos Serviços</Title>
            <Description>
                Oferecemos uma gama completa de serviços que abrangem desde a criação de empresas, gestão fiscal, contábil e RH, ajudando sua empresa a crescer com eficiência e segurança.
            </Description>
            <ServicesList>
                <ServiceCard>
                    <FaBuilding size={50} color="#DAA520" />
                    <ServiceTitle>Criação de Empresas</ServiceTitle>
                    <ServiceDescription>
                        Ajudamos você a estabelecer sua empresa de forma eficiente e dentro das normas legais, com assessoria desde o planejamento inicial até a formalização completa.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <FaFileInvoice size={50} color="#DAA520" />
                    <ServiceTitle>Gestão Fiscal</ServiceTitle>
                    <ServiceDescription>
                        Mantemos suas obrigações fiscais em dia, garantindo o cumprimento das regulamentações e maximizando os benefícios fiscais para sua empresa.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <FaCalculator size={50} color="#DAA520" />
                    <ServiceTitle>Contabilidade</ServiceTitle>
                    <ServiceDescription>
                        Oferecemos serviços contábeis completos, desde o balanço patrimonial até o planejamento tributário, garantindo clareza e precisão nas finanças da sua empresa.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <FaUsers size={50} color="#DAA520" />
                    <ServiceTitle>Recursos Humanos (RH)</ServiceTitle>
                    <ServiceDescription>
                        Cuidamos de toda a gestão de pessoas, folha de pagamento, contratações, benefícios e cumprimento das obrigações trabalhistas.
                    </ServiceDescription>
                </ServiceCard>
            </ServicesList>
        </ServicosSection>
    );
};

export default Servicos;
