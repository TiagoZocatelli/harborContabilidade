import { FaInstagram, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // Importando ícones
import {
  FooterWrapper,
  FooterSection,
  FooterTitle,
  FooterInfo,
  WhatsAppLink,
  InstagramLink,
  FooterContainer,
  Divider,
  WhatsAppIcon,
  AddressLink,
  EmailLink,
} from './styles';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <FooterSection>
            <FooterTitle>Endereço</FooterTitle>
            <FooterInfo>
              <AddressLink
                href="https://www.google.com/maps/uv?pb=!1s0x94ecd784c82639bf%3A0x242ebd22b66e01df!3m1!7e115!4s%2Fmaps%2Fplace%2Fharbor%2Bcontabilidade%2F%40-23.4197556%2C-51.9461394%2C3a%2C75y%2C7.69h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sWdjYguQ0gsLROogxoDNdgw*212e0*214m2*213m1*211s0x94ecd784c82639bf%3A0x242ebd22b66e01df%3Fsa%3DX%26ved%3D2ahUKEwjZ79PQxKiIAxWuppUCHTZDLYUQpx96BAg8EAA!5sharbor%20contabilidade%20-%20Pesquisa%20Google!15sCgIgAQ&imagekey=!1e2!2sWdjYguQ0gsLROogxoDNdgw&cr=le_a7&hl=pt-BR&ved=1t%3A206134&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                title="Clique para ver o endereço no Google Maps"
              >
                <FaMapMarkerAlt fontSize={25}/> Edifício Monumental - Av. Carneiro Leão, 294 <br />
                Sala 1505 - Zone 1, Maringá - PR, 87014-010
              </AddressLink> 
            </FooterInfo>
            <FooterInfo>(Clique para abrir no Google Maps)</FooterInfo>
          </FooterSection>

          <Divider />

          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <FooterInfo>
              <WhatsAppLink 
                href="https://wa.me/554433542844" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Clique para entrar em contato via WhatsApp"
              >
                <WhatsAppIcon fontSize={25} /> +55 44 3354-2844
              </WhatsAppLink>
            </FooterInfo>
            <FooterInfo>
              Horário de atendimento: 7:30 às 17:30 <br />
              Segunda a Sexta <br />
              (Clique para enviar uma mensagem no WhatsApp)
            </FooterInfo>
          </FooterSection>

          <Divider />

          <FooterSection>
            <FooterTitle>Email</FooterTitle>
            <FooterInfo>
              <EmailLink
                href="mailto:douglas@harborcontabilidade.com.br"
                target="_blank"
                rel="noopener noreferrer"
                title="Clique para enviar um email"
              >
                <FaEnvelope /> harborcontabilidade <br />
              </EmailLink>
              (Clique para enviar uma mensagem via E-Mail)
            </FooterInfo>
          </FooterSection>

          <Divider />

          <FooterSection>
            <FooterTitle>Novidades</FooterTitle>
            <InstagramLink 
              href="https://www.instagram.com/harbor_contabilidade/?igsh=bjg1Y3BhdGRpYTJr" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Clique para visitar nosso perfil no Instagram"
            >
              <FaInstagram fontSize={25}/> harbor_contabilidade
            </InstagramLink>
            <FooterInfo>(Clique para ver as novidades no Instagram)</FooterInfo>
          </FooterSection>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
