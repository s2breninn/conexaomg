import * as card from "./styles";
import ProductBuy from "../../../public/camisa.png";
import { FaBasketShopping } from "react-icons/fa6";

export default function Sobre () {

    return(
        <card.ContainerCard>
            <card.ContainerImage>
                <img src={ProductBuy}/>
            </card.ContainerImage>

            <card.FooterCard>
                <card.Description>
                    <card.NameProduct>Camisa</card.NameProduct>
                    <card.Price>R$ 40,00</card.Price>
                </card.Description>

                <card.ContainerButton>
                    <card.ButtonBuy>Comprar</card.ButtonBuy>
                    <card.ButtonCar><FaBasketShopping color="#fffff" size={20}/></card.ButtonCar>
                </card.ContainerButton>
            </card.FooterCard>
        </card.ContainerCard>
    )
}