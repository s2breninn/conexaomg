import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        width: 100%;
        height: 100vh;
    }

    button{
        cursor: pointer;
        border: none;
        color: #fff;
        padding: 15px;
        border-radius: 5px;
        font-weight: 700;
    }

    a { 
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
/*
    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        color: #fff;
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        color: #fff;
    }
*/
`