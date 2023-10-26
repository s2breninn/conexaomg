import * as footer from './styles'
import whatsapp from '../../../public/whatsapp.png'
import instagram from '../../../public/instagram.png'
import facebook from '../../../public/facebook.png'
import Logo from "../../../public/logoParteTras.png";
import * as scroll from 'react-scroll'

export default function Footer() {
  return (
    <footer.Footer>
        <footer.FooterContainer>
            <footer.FooterTop>
                <footer.CompanyInfo>
                    <footer.CompanyLogo><img src={Logo} width={150}/></footer.CompanyLogo>
                    <footer.CompanyDescription>Bem-vindo à minha página, onde a paixão pelas motos e a adrenalina se encontram! <br></br>A página mais bombada de toda MG. <br></br></footer.CompanyDescription>
                    <footer.FooterList>
                        <footer.FooterListItems><img src={instagram}/></footer.FooterListItems>
                        <footer.FooterListItems><img src={facebook}/></footer.FooterListItems>
                        <footer.FooterListItems><img src={whatsapp}/></footer.FooterListItems>
                    </footer.FooterList>
                    <footer.Copyright>©️ 2023 Copyright</footer.Copyright>
                    <footer.Copyright>Desenvolvedor & CEO Conexão MG: Breno Mendes</footer.Copyright>
                </footer.CompanyInfo>
                <footer.Container>
                    <footer.FooterTitle>Links</footer.FooterTitle>    
                    <footer.FooterList>
                        <footer.FooterListItems><scroll.Link to='home'  spy={true} smooth={true} offset={-200} duration={400}>Home</scroll.Link></footer.FooterListItems>
                        <footer.FooterListItems><scroll.Link to='about'  spy={true} smooth={true} offset={-200} duration={500}>Sobre</scroll.Link></footer.FooterListItems>
                        <footer.FooterListItems>Serviços</footer.FooterListItems>
                        <footer.FooterListItems><scroll.Link to='about'  spy={true} smooth={true} offset={-200} duration={500}>Quem somos</scroll.Link></footer.FooterListItems>
                    </footer.FooterList>
                </footer.Container>
                <footer.Container>
                    <footer.FooterTitle>Contato</footer.FooterTitle>    
                    <footer.FooterList>
                        <footer.FooterListItems>info@meusite.com</footer.FooterListItems>
                        <footer.FooterListItems>Tel: (33) 99969-0428</footer.FooterListItems>
                        <footer.FooterListItems>R. Padre Virgulino, 180</footer.FooterListItems>
                    </footer.FooterList>
                </footer.Container>
            </footer.FooterTop>
        </footer.FooterContainer>
    </footer.Footer>
  )
}
