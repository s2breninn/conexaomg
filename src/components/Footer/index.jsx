import * as footer from './styles'
import whatsapp from '../../../public/whatsapp.png'
import instagram from '../../../public/instagram.png'
import facebook from '../../../public/facebook.png'

export default function Footer() {
  return (
    <footer.Footer>
        <footer.FooterContainer>
            <footer.FooterTop>
                <footer.CompanyInfo>
                    <footer.CompanyLogo>Conexão mg</footer.CompanyLogo>
                    <footer.CompanyDescription>A página mais bombada de toda MG</footer.CompanyDescription>
                    <footer.FooterList>
                        <footer.FooterListItems><img src={instagram}/></footer.FooterListItems>
                        <footer.FooterListItems><img src={facebook}/></footer.FooterListItems>
                        <footer.FooterListItems><img src={whatsapp}/></footer.FooterListItems>
                    </footer.FooterList>
                    <footer.Copyright>©️ Desde 2023</footer.Copyright>
                </footer.CompanyInfo>
                <footer.Container>
                    <footer.FooterTitle>Informações</footer.FooterTitle>    
                    <footer.FooterList>
                        <footer.FooterListItems>Sobre</footer.FooterListItems>
                        <footer.FooterListItems>Serviços</footer.FooterListItems>
                        <footer.FooterListItems>Quem Somos</footer.FooterListItems>
                    </footer.FooterList>
                </footer.Container>
            </footer.FooterTop>
        </footer.FooterContainer>
    </footer.Footer>
  )
}
