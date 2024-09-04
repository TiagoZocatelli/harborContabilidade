import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
  }

  /* Estilos adicionais globais, se necessário */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FDFDFD; /* Fundo branco neve */
    color: #333;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Outros resets globais */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: 700;
  }

  p {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyle;
