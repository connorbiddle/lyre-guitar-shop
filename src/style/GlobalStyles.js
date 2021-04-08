import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Raleway", sans-serif;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  button, input, textarea {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
