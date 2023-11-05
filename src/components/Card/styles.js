import styled from "styled-components";
import * as colors from '../../config/colors'

export const ContainerCard = styled.div`
    background: ${colors.whiteColor};
    height: 30em;
    width: 20em;
    margin: 1.5em;
    padding: .8em 0;
    border-radius: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const ContainerImage =styled.div`
    height: 60%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .8em;
    background: ${colors.inputColor};

    img{
        width: 18em;
        border-radius: 1em;
    }
`

export const FooterCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 40%;
    width: 90%;
`   

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    padding: .8em 0;
`

export const NameProduct = styled.h6`
    font-size: 1.5em;
    color: ${colors.blackColor};
`

export const Price = styled.span`

`

export const ContainerButton = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .8em;
`

export const ButtonBuy = styled.button`
    width: 80%;
    height: 3em;
    color: ${colors.whiteColor};
    background: ${colors.greenColor};
`

export const ButtonCar = styled.button`
    width: 20%;
    height: 3em;
    background: ${colors.inputColor};
`