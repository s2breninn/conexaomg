import styled from "styled-components";
import * as colors from '../../config/colors'

export const Container = styled.div`
        background: linear-gradient(148deg, rgba(255,0,0,1) -2%, rgba(246,0,0,1) 27%, rgba(239,0,0,1) 46%, rgba(192,0,0,1) 75%, rgba(145,0,0,1) 100%, rgba(50,0,0,1) 100%, rgba(105,0,0,1) 100%, rgba(0,0,0,1) 100%);
        width: 100%;
        height: 100vh;
        padding-top: 120px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 25rem 0;
`
export const ContainerSegunry = styled.div`
        background: linear-gradient(32deg, rgba(255,0,0,1) -2%, rgba(246,0,0,1) 27%, rgba(239,0,0,1) 46%, rgba(192,0,0,1) 75%, rgba(145,0,0,1) 100%, rgba(50,0,0,1) 100%, rgba(105,0,0,1) 100%, rgba(0,0,0,1) 100%);background: linear-gradient(36deg, rgba(255,0,0,1) -2%, rgba(246,0,0,1) 27%, rgba(239,0,0,1) 46%, rgba(192,0,0,1) 75%, rgba(145,0,0,1) 100%, rgba(50,0,0,1) 100%, rgba(105,0,0,1) 100%, rgba(0,0,0,1) 100%); 
        width: 100%;
        height: 160vh;
        display: flex;
        align-items: end;
        justify-content: center;
`
export const BackgroundContainerSegundary = styled.div`
        background-image: url('../../../public/graubor.jpg');
        width: 100%;
        height: 100%;
        background-position:center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;

`

export const LeftContainer = styled.div`
        width: 50%;
`
export const RightContainer = styled.div`
        width: 50%;
`

export const Title = styled.h1`
        font-size: 6rem;
        color: ${colors.whiteColor};
        text-shadow: 3px 4px 200px #000000;
`

export const Phrase = styled.h4`
        color: ${colors.inputColor};
        font-weight: 400;
        font-style: italic;
        font-size: 1rem;
        animation: myAnim 1s;

        @keyframes myAnim {
                50% {
                        transform: scale(0.9);
                }

                90% {
                        transform: scale(1);
                }
        }
`
export const ContainerThird = styled.div`
        width: 100%;
        height: 80vh;
        background: ${colors.inputColor};
        display: flex;
        justify-content: center;
        padding: 7rem 2rem;
`

export const ContainerThirdInfo = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
`
export const TitleThirdInfo = styled.h1`
        font-family: Helvetica, sans-serif;
        font-size: 5rem;
        color: ${colors.grayTitleColor};
        font-weight: 800;
`
export const ContainerImages = styled.div`
        padding-top: 1.2rem;
        img{
                padding: 2rem;
        }
`

export const ContainerHomeCard = styled.div`
        position: absolute;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: ${colors.whiteColor};
`

export const ContainerTitleProducts = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${colors.whiteColor};
        padding: 4em;

        @media screen and (max-width: 1100px){
                font-size: 10px;
                padding-top: 80px;
        }
`

export const CardsHome = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4em 2em;

        @media screen and (max-width: 1200px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }
`

export const TitleProducts = styled.h1`
        font-family: Helvetica, sans-serif;
        font-size: 4em;
        color: ${colors.grayTitleColor};
        font-weight: 700;
`