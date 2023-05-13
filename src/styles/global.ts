import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary_group};
    letter-spacing: 0.6px;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    height: 100vh;
    background-color: #3c3c3c;
  }
`;
