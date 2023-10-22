import * as login from "./styles";
import Logo from "../../../public/logotras.png";
import Password from "../../../public/password.png";
import Profile from "../../../public/profile.png";
import Email from "../../../public/email.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <login.ContainerLogin>
        <login.LeftLogin>
            <Link to='/'><img src={Logo} alt="Logo - Conexão MG" width={300}/></Link>
            <login.TitleLeft>Bem-vindo!</login.TitleLeft>
            <login.Paragraph>Acesse sua conta agora mesmo</login.Paragraph>
            <login.ContainerButtons>
                <login.Button>ENTRAR</login.Button>
                <login.Button>CONTINUAR SEM LOGIN</login.Button>
            </login.ContainerButtons>
        </login.LeftLogin>
        <login.RightLogin>
            <login.TitleRight>Crie a sua conta</login.TitleRight>

            <login.ContainerInput>
                <login.AreaInput>
                    <img src={Profile} alt="Nome" width={24}/>
                    <login.Input type="text" placeholder="Nome" />
                </login.AreaInput>
                <login.AreaInput>
                    <img src={Email} alt="Email" width={24}/>
                    <login.Input type="email" placeholder="Email" />
                </login.AreaInput>
                <login.AreaInput>
                    <img src={Password} alt="Senha" width={24}/>
                    <login.Input type="password" placeholder="Senha" />
                </login.AreaInput>
                <login.AreaInput>
                    <img src={Password} alt="Senha" width={24}/>
                    <login.Input type="password" placeholder="Repita a senha" />
                </login.AreaInput>
            </login.ContainerInput>

            <login.ButtonLogUp>CADASTRAR</login.ButtonLogUp>
        </login.RightLogin>
    </login.ContainerLogin>
  )
}
