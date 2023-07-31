import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

        &::-moz-selection {
        }

        &::selection {
        }
    }

   
    :focus {
        outline: 0;
    }

    html {
        background: rgb(26,25,43);
        background: linear-gradient(180deg, rgba(26,25,43,1) 0%, rgba(6,6,13,1) 20%);
        height: 100vh;
    }

    body {
        height: 100%;
    }

    body, input, textarea button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button, a {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    a {
       text-decoration: none;
       color: black;
      -webkit-tap-highlight-color: transparent;

    }

`
