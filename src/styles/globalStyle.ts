import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme.background};
  }

  button, input {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
  
`
