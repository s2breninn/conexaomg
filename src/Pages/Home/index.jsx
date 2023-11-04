import  * as home from "./styles";
import  Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sobre from "../../components/Sobre";
import Card from "../../components/Card";
import DrogariaRamalho from "../../../public/logo-ramalho.png";
import BarLavaJato from "../../../public/logo-barlavajatorm.png";
import InfoTech from "../../../public/logo-infotech.png";
import Minas from "../../../public/logo-minas.png";
import Skp from "../../../public/logo-skp.png";
import Wr from "../../../public/logo-wr.png";

export default function Home () {

    return(
        <>
        <Header/>
        <home.Container id="home">
            <home.Title>CONEXÃO MG</home.Title>
            <home.Phrase>"A paixão por motos é uma chama que nunca se apaga e só quem é motoqueiro entende essa sensação."</home.Phrase>
            <Sobre/>
        </home.Container>
        <home.ContainerSegunry>
            <home.BackgroundContainerSegundary></home.BackgroundContainerSegundary>
            <home.ContainerHomeCard>
                <home.ContainerTitleProducts>
                    <home.TitleProducts>CONHEÇA NOSSOS PRODUTOS:</home.TitleProducts>
                </home.ContainerTitleProducts>
                <home.CardsHome>
                    <Card/>
                    <Card/>
                    <Card/>
                </home.CardsHome>
            </home.ContainerHomeCard>
        </home.ContainerSegunry>
        <home.ContainerThird>
            <home.ContainerThirdInfo>
                <home.TitleThirdInfo>PARCEIROS</home.TitleThirdInfo>
                <home.ContainerImages>
                    <img src={DrogariaRamalho} width={300}/>
                    <img src={BarLavaJato} width={300}/>
                    <img src={InfoTech} width={300}/><br></br>
                    <img src={Minas} width={300}/>
                    <img src={Skp} width={300}/>
                    <img src={Wr} width={300}/>
                </home.ContainerImages>
            </home.ContainerThirdInfo>
        </home.ContainerThird>
        <Footer/>
        </>
    )
}