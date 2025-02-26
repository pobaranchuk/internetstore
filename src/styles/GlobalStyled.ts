import { createGlobalStyle } from 'styled-components'
import { Theme } from './Theme.ts'

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Theme.colors.font};
    line-height: 1.2;
    
    min-width: 360px; // это минимальный размер макета на мобилке который поможет избежать горизонтального скрола
  }

  a {
    text-decoration: none;
    color: ${Theme.colors.font};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${Theme.colors.font};
  }

  section {
    padding: 100px 0;
    
    @media ${Theme.media.mobile} {
      padding: 80px 0;
    }
  }

  h3 {
    font-family: Josefin Sans, sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;    
  }
  
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
`
