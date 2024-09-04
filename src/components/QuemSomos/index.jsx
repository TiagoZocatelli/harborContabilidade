import {
    QuemSomosSection,
    QuemSomosTitle,
    QuemSomosDescription,
    Highlight,
    QuemSomosContainer,
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
        
            </QuemSomosContainer>
        </QuemSomosSection>
    );
};

export default QuemSomos;
