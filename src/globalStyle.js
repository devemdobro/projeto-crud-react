import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    #root{ 
        height:100vh; 
        margin:0;
        display:flex; 
        flex-direction:column; 
    }

    footer{
        margin-top:auto; 
    }

    main{
        padding: 50px;
    }

    a{        
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }

    table {
        border-collapse: collapse;
    }
`