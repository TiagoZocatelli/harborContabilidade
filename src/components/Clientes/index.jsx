import {
    ClientesSection,
    ContentContainer,
    Title,
    Description,
    StatsContainer,
    StatCard,
    StatNumber,
    StatDescription,
    ClientSegmentsContainer,
    Segment,
    HighlightedText, // Renomeado para evitar conflito
} from "./styles"; // Importando os estilos do styles.js

const Cliente = () => {
    return (
        <ClientesSection>
            <ContentContainer>
                <Title>Atendendo Mais de 200 Clientes em Todo o Brasil</Title>
                <Description>
                    Com mais de <HighlightedText>10 anos de experiência</HighlightedText>, atendemos diversas empresas em segmentos variados como varejo, logística, tecnologia, e muitas outras. Nosso compromisso é oferecer soluções personalizadas que ajudam nossos clientes a alcançar o sucesso.
                </Description>
                <StatsContainer>
                    <StatCard>
                        <StatNumber>200+</StatNumber>
                        <StatDescription>Clientes Atendidos</StatDescription>
                    </StatCard>
                    <StatCard>
                        <StatNumber>10+</StatNumber>
                        <StatDescription>Anos de Experiência</StatDescription>
                    </StatCard>
                    <StatCard>
                        <StatNumber>100%</StatNumber>
                        <StatDescription>Satisfação Garantida</StatDescription>
                    </StatCard>
                </StatsContainer>
                <ClientSegmentsContainer>
                    <Segment>
                        <h3>Varejo</h3>
                        <p>Atendemos grandes redes de lojas e supermercados em todo o Brasil.</p>
                    </Segment>
                    <Segment>
                        <h3>Logística</h3>
                        <p>Oferecemos soluções para empresas de transporte e armazenamento.</p>
                    </Segment>
                    <Segment>
                        <h3>Tecnologia</h3>
                        <p>Apoiamos empresas de TI com serviços contábeis especializados.</p>
                    </Segment>
                    <Segment>
                        <h3>Indústria</h3>
                        <p>Fornecemos consultoria fiscal e contábil para indústrias de todos os tamanhos.</p>
                    </Segment>
                </ClientSegmentsContainer>
            </ContentContainer>
        </ClientesSection>
    );
};

export default Cliente;
