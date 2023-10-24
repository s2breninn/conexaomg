import styled from "styled-components";

export const Footer = styled.footer`
    padding-block: 5rem;
    background: #151823;
    color: #666873;
`
export const FooterContainer = styled.div`
    max-width: 116rem;
    margin: auto;
    padding: 0 1.5rem;
`
export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem), 1fr);
    row-gap: 2rem;
    display: flex;
    flex-direction: row;
`
export const CompanyInfo = styled.div`
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-right: 5rem;

    ul{
        flex-direction: row;
    }
`
export const CompanyLogo = styled.h2`
    color: #fff;

`
export const CompanyDescription = styled.p`

`
export const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const FooterListItems = styled.li`
    list-style: none;
`
export const FooterTitle= styled.h6`
    font-size: 1.8rem;
    color: #fff;
    font-weight: 500;
    margin-bottom: 2rem;
`
export const Copyright= styled.span`
    margin-top: auto;
`
export const Container= styled.div`
    padding: 0 4rem;
    margin: auto;
`