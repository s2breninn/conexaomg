import styled from "styled-components";
import * as colors from '../../config/colors'

export const Container = styled.div`
        background: linear-gradient(148deg, rgba(255,0,0,1) -2%, rgba(246,0,0,1) 27%, rgba(239,0,0,1) 46%, rgba(192,0,0,1) 75%, rgba(145,0,0,1) 100%, rgba(50,0,0,1) 100%, rgba(105,0,0,1) 100%, rgba(0,0,0,1) 100%);
        //background: ${colors.primaryColor};
        width: 100%;
        height: 100vh;
        padding-top: 120px;
        display: flex;
`
export const LeftContainer = styled.div`
        width: 50%;
`
export const RightContainer = styled.div`
        width: 50%;
`

export const ContainerInfo = styled.div`

`
