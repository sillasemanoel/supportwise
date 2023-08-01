// dependencies
import { createGlobalStyle } from 'styled-components'

// fonts
import Wix from '../fonts/wixmadefordisplay/wixmadefordisplay.ttf'
import Coolvetica from '../fonts/coolvetica/coolveticarg.ttf'

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

  .under_development {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px;
    border-radius: 5px;
    background-color: #ff3f3c;
    font-family: var(--font-family-primary);
    color: #fff;
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
`
