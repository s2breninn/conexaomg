import styled from "styled-components";
import * as colors from  '../../config/colors'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30rem;
    border-radius: 2rem;
    box-shadow: 21px 20px 50px -1px rgba(0,0,0,0.75);
    z-index: 2;
    width: 50%;
    animation: myAnim 2s;

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
    height: 15rem;
    position: relative;
    padding: 1.5rem;
    border-radius: 2rem;
    background: ${colors.whiteColor};
`   

export const ContainerInfoAbout = styled.div`
    display: flex;
`

export const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: ${colors.blackColor};
`