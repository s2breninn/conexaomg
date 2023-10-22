import styled from "styled-components";
import * as colors from "../../config/colors";

export const ContainerLogin = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`
export const LeftLogin = styled.div`
    width: 30vw;
    height: 100%;
    padding: 8rem 0;
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const RightLogin = styled.div`
    width: 70vw;
    height: 100%;
    background: ${colors.whiteColor};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const TitleLeft = styled.h3`
    color: ${colors.whiteColor};
    font-size: 30px;
`
export const Paragraph = styled.p`
    color: ${colors.whiteColor};
    font-size: 15px;
    font-weight: 300;
    padding: 2.5rem 0;
`
export const ContainerButtons = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
`
export const Button = styled.button`
    height: 5rem;
    width: 15rem;
    font-size: 1rem;
    background: transparent;
    border-radius: 1rem;
    border: solid ${colors.whiteColor};
    margin: 1.5rem 0;
`

export const TitleRight = styled.h3`
    color: ${colors.primaryColor};
    font-size: 2rem;
    font-weight: 400;
`

export const ContainerInput = styled.div`
    margin: 10rem 10rem 3rem 10rem;
`

export const AreaInput = styled.div`
    background: ${colors.inputColor};
    width: 32rem;
    height: 2rem;
    padding: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.2rem;
    
`

export const Input = styled.input`
    ::placeholder{
        color: #9a9a9a;
    }
    background: transparent;
    border: none;
    font-size: 1rem;
    padding: 1rem;
    outline: none;
    color: #525252;
    width: 30rem;
`

export const ButtonLogUp = styled.button`
    height: 5rem;
    width: 15rem;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 1.5rem;
    background: ${colors.primaryColor};
`