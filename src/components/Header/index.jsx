import { Header, Nav, Ul, Li } from "./styled"
import { Link } from "react-router-dom";
import Logo from "../../../public/logoParteTras.png";

export default function HeaderSite(){

    return(
        <Header>
            <img src={Logo} alt="" width={135}/>
            <Nav>

                <Ul>
                    <Li><Link to='/'>Home</Link></Li>
                    <Li><Link to='/sobre'>Sobre</Link></Li>
                    <Li><Link to='/contato'>Contato</Link></Li>
                    <Li><Link to='/login'>Login</Link></Li>
                </Ul>
            </Nav>
        </Header>
    )
}