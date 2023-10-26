import { Header, Nav, Ul, Li } from "./styled"
import { Link } from "react-router-dom";
import * as scroll from "react-scroll";
import Logo from "../../../public/logoParteTras.png";

export default function HeaderSite(){

    return(
        <Header>
            <scroll.Link to='home' spy={true} smooth={true} offset={-200} duration={500}><img src={Logo} alt="" width={135}/></scroll.Link>
            <Nav>

                <Ul>
                    <Li><scroll.Link to='home' spy={true} smooth={true} offset={-200} duration={300}>Home</scroll.Link></Li>
                    <Li><scroll.Link to='about'  spy={true} smooth={true} offset={-200} duration={500}>Sobre</scroll.Link></Li>
                    <Li><Link to='/contato'>Contato</Link></Li>
                    <Li><Link to='/login'>Login</Link></Li>
                </Ul>
            </Nav>
        </Header>
    )
}