import * as card from "./styles";
import { FaBasketShopping } from "react-icons/fa6";

export default function Card (props) {

    return(
        <card.ContainerCard key={props.id}>
            <card.ContainerImage>
                <img src={props.image} alt="Imagem do produto"/>
            </card.ContainerImage>

            <card.FooterCard>
                <card.Description>
                    <card.NameProduct>{props.name}</card.NameProduct>
                    <card.Price>R$ {props.price},00</card.Price>
                </card.Description>

                <card.ContainerButton>
                    <card.ButtonBuy>Comprar</card.ButtonBuy>
                    <card.ButtonCar><FaBasketShopping color="#fffff" size={20}/></card.ButtonCar>
                </card.ContainerButton>
            </card.FooterCard>
        </card.ContainerCard>
    )
}