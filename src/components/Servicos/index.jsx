import {
    ServicosSection,
    Title,
    Description,
    ServicesList,
    ServiceCard,
    ServiceTitle,
    ServiceDescription,
    Icon,
    TitleIconWrapper,
} from "./styles"; // Importando os estilos do styles.js
import { FaBuilding, FaFileInvoice, FaCalculator, FaUsers, FaBriefcase } from "react-icons/fa"; // Ícones

const Servicos = () => {
    return (
        <ServicosSection>
            <TitleIconWrapper>
                <FaBriefcase size={50} color="#DAA520" />
                <Title>Nossos Serviços</Title>
            </TitleIconWrapper>
            <Description>
                Oferecemos uma gama completa de serviços especializados para atender todas as suas necessidades empresariais com eficiência e profissionalismo. Descubra como podemos ajudar a sua empresa a crescer.
            </Description>
            <ServicesList>
                <ServiceCard>
                    <Icon><FaBuilding size={50} /></Icon>
                    <ServiceTitle>Abertura de Empresas</ServiceTitle>
                    <ServiceDescription>
                        Facilite o início do seu negócio com nossa consultoria especializada. Cuidamos de todos os detalhes legais e burocráticos para que você possa focar no crescimento da sua empresa.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <Icon><FaFileInvoice size={50} /></Icon>
                    <ServiceTitle>Gestão Fiscal</ServiceTitle>
                    <ServiceDescription>
                        Mantenha sua empresa em conformidade com as leis fiscais. Oferecemos serviços completos para gestão de impostos, aproveitando benefícios fiscais e garantindo a regularidade fiscal.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <Icon><FaCalculator size={50} /></Icon>
                    <ServiceTitle>Contabilidade</ServiceTitle>
                    <ServiceDescription>
                        Nossos serviços contábeis são projetados para proporcionar clareza e precisão financeira. Desde a elaboração de balanços até o planejamento tributário, cuidamos de todas as suas necessidades contábeis.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <Icon><FaUsers size={50} /></Icon>
                    <ServiceTitle>Departamento Pessoal</ServiceTitle>
                    <ServiceDescription>
                        Gerencie sua equipe com eficiência. Cuidamos de todos os aspectos da gestão de pessoal, incluindo folha de pagamento, contratações e conformidade com as leis trabalhistas.
                    </ServiceDescription>
                </ServiceCard>
            </ServicesList>
        </ServicosSection>
    );
};

export default Servicos;
