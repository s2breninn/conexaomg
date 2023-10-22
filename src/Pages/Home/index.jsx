import  * as home from "./styles";
import  Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home () {

    return(
        <>
        <Header/>
        <home.Container>
            <home.LeftContainer>Container da esquerda</home.LeftContainer>
            <home.RightContainer>Coinatiner in right</home.RightContainer>
        </home.Container>
        <Footer/>
        </>
    )
}