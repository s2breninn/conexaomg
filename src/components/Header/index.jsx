import { Header, Nav, Ul, Li } from "./styled"
import Logo from "../../../public/CX.png";

export default function HeaderSite(){

    return(
        <Header>
            <img src={Logo} alt="" width={135}/>
            <Nav>

                <Ul>
                    <Li>Home</Li>
                    <Li>Sobre</Li>
                    <Li>Contato</Li>
                    <Li>Login</Li>
                </Ul>
            </Nav>
        </Header>
    )
}