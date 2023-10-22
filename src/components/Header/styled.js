import styled from "styled-components";
import * as colors from '../../config/colors'

export const Header = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: inset -5px 40px 20px -38px rgba(0,0,0,0.62);
`

export const Nav = styled.nav`
    font-size: 15px;
`
export const Ul = styled.ul`
    display: flex;
    gap: 40px;
    li{
        color: red;
    }

    li:hover{
        cursor: pointer;
        color: ${colors.whiteColor};
        transition: all 0.8s;
    }
`
export const Li = styled.li`
`