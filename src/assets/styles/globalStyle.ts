// Dependencies
import { createGlobalStyle } from "styled-components";
// Fonts
import Wix from "../fonts/wixmadefordisplay/wixmadefordisplay.ttf";
import Coolvetica from "../fonts/coolvetica/coolveticarg.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: coolvetica;
    src: url(${Coolvetica});
  }

  @font-face {
    font-family: wix;
    src: url(${Wix});
  }

  :root {
    --font-family-primary: coolvetica, sans-serif;
    --font-family-secondary: wix, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family-primary);
    color: #000;
    background-color: #fff;
    user-select: none;
    outline: none;
  }

  a {
    text-decoration: none;
    outline:none;
  }

  .miniature {
    width: 1300px;
    height: 650px;
    border-radius: 6px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    display: flex;
    background-color: #fff;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #8e8e8e;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 20px;
  }
`;
