import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary_group};
    font-size: 16px;
    letter-spacing: 0.6px;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.dark_purple};
    border-radius: 100px;
  }

  body {
    background-color: ${theme.colors.darkest_purple};
    height: 100vh;
  }
`;
