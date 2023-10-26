import * as about from "./styles";
import Mascote from "../../../public/mascote.png";

export default function Sobre () {

    return(
        <about.Container id="about">
            <about.ContainerAbout>
                <h1>Quem somos</h1>
                <about.ContainerInfoAbout>
                    <about.Paragraph>Somos uma plataforma de apaixonado por duas rodas! Aqui você terá informações sobre manutenção, 
                        dicas de pilotagem e noticias atualizadas com os videos mais inguiçados das redes socias. Temos como propósito de crescer 
                        ganhando nosso espaço de forma digna mostrando que o grau não é crime.
                        <span>#graunãoecrime  #244   #lokospormotos</span> 
                    </about.Paragraph>
                </about.ContainerInfoAbout>
            </about.ContainerAbout>
            <img className="mascote" src={Mascote} alt="Mascote da Conexãao"/>
        </about.Container>
    )
}