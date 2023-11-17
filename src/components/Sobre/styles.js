import styled from "styled-components";
import * as colors from  '../../config/colors'

export const Container = styled.div`
    width: 900px;
    display: flex;
    justify-content: center;
    margin: 24em 30em 30em 30em;
    background: ${colors.whiteColor};
    border-radius: 2rem;
    box-shadow: 21px 20px 50px -1px rgba(0,0,0,0.75);
    z-index: 2;
    animation: myAnim 2s;


    @media screen and (max-width: 1100px){
        display: none;
    }
    
    img{
        width: 10em;
        margin: 3em 8em;
        -webkit-filter: drop-shadow(0px 0px 20px rgba(0 0 0 / 90%)); 
        filter: drop-shadow(-.4em .1em 0.5em ${colors.blackColor});
    }

    
    @keyframes myAnim {
        0% {
            transform: scale(0.5);
        }
        
        100% {
            transform: scale(1);
        }
        
    }
    `  

export const ContainerAbout = styled.div`
    position: relative;
    padding: 2em;
    border-radius: 2em;
`   

export const ContainerInfoAbout = styled.div`
    display: flex;
    height: 90%;
`

export const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: ${colors.blackColor};
    padding: 2.5em 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span{
        color: ${colors.blackColor};
        font-weight: bold;
    }
`

export const ContainerImgMascote = styled.div`
    width: auto;
    padding: 2px;
`