import * as about from "./styles";

export default function Sobre () {

    return(
        <about.Container data-aos-zoom>
            <about.ContainerAbout>
                <h1>Quem somos</h1>
                <about.ContainerInfoAbout>
                    <about.Paragraph>Somos uma plataforma de apaixonado por duas rodas! Aqui você terá informações sobre manutenção, 
                        dicas de pilotagem e noticias atualizadas com os videos mais inguiçados das redes socias. Temos como propósito de crescer 
                        ganhando nosso espaço de forma digna mostrando que o grau não é crime.
                        #graunãoecrime 
                    </about.Paragraph>
                </about.ContainerInfoAbout>
            </about.ContainerAbout>
        </about.Container>
    )
}