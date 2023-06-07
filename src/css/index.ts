import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  ul,
  li,
  a,
  button
  {
    display: block;
    max-width: 100%;
  }

  body {
    font-family: 'Heebo', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #38343D;

    background-color: #935FD3;
  }
`;
