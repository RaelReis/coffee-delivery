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

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['base-card']};
    }

    ::-webkit-scrollbar {
      width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['yellow-300']};
      border-radius: 10px;
    }
  }

  button, input {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  @media (max-width: 1050px) {
    html {
      font-size: 50.25%;
    }
  }

  @media (max-width: 825px) {
    html {
      font-size: 42%;
    }
  }
  
`
