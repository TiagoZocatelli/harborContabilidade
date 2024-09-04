import {
    QuemSomosSection,
    QuemSomosTitle,
    QuemSomosDescription,
    Highlight,
    QuemSomosContainer,
    QuemSomosGrid,
    QuemSomosCard,
    CardTitle,
    CardText,
} from "./styles"; // Importando os estilos do styles.js
import { FaEye, FaBullseye, FaHandshake } from 'react-icons/fa';

const QuemSomos = () => {
    return (
        <QuemSomosSection>
            <QuemSomosTitle>Quem Somos</QuemSomosTitle>
            <QuemSomosDescription>
                Somos uma <Highlight>equipe de contadores especializados</Highlight> com mais de <Highlight>20 anos de experiência</Highlight> no mercado. Oferecemos soluções completas em contabilidade, <Highlight>fiscal</Highlight> e <Highlight>gestão empresarial</Highlight>, com foco em resultados e crescimento sustentável para nossos clientes.
            </QuemSomosDescription>
            <QuemSomosDescription>
                Nosso compromisso é com a <Highlight>transparência</Highlight> e a <Highlight>personalização</Highlight> dos serviços. Cada cliente é tratado como um parceiro, e nossas soluções são adaptadas às necessidades específicas de cada negócio.
            </QuemSomosDescription>

            <QuemSomosContainer>
                <QuemSomosGrid>
                    <QuemSomosCard>
                        <CardTitle> <FaBullseye fontSize={25} /> Missão</CardTitle>
                        <CardText>
                            Garantir serviços contábeis eficientes e personalizados que impulsionam o crescimento das empresas.
                        </CardText>
                    </QuemSomosCard>
                    <QuemSomosCard>
                        <CardTitle>
                            <FaEye fontSize={25} /> Visão
                        </CardTitle>
                        <CardText>
                            Ser referência em contabilidade empresarial, reconhecida pela qualidade, inovação e confiabilidade dos nossos serviços.
                        </CardText>
                    </QuemSomosCard>
                    <QuemSomosCard>
                        <CardTitle><FaHandshake fontSize={25} /> Valores</CardTitle>
                        <CardText>
                            Transparência, comprometimento, ética profissional e busca contínua por soluções que agreguem valor aos nossos clientes.
                        </CardText>
                    </QuemSomosCard>
                </QuemSomosGrid>
            </QuemSomosContainer>
        </QuemSomosSection>
    );
};

export default QuemSomos;
