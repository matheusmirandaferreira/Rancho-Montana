import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }: { theme: typeof DefaultTheme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 16px;
      line-height: 1.5;
    }

    body {
      background-color: ${theme.white};
      font-family: 'Montserrat', sans-serif;
      overflow-x: hidden;
    }

    input,
    button {
      font-family: 'Montserrat', sans-serif;
    }

    a {
      text-decoration: none;
      color: ${theme.white};
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 300;

      &:visited {
        color: ${theme.gray500};
      }
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
      background-color: ${theme.primary700};
      color: ${theme.white};
      font-size: 14px;
      padding: 8px;
      border: 0;
      outline: 0;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        transform: scale(0.98);
      }

      &:focus {
        box-shadow: 0 0 5px ${theme.primary500};
      }
    }
  `}
`;

export const DefaultTheme = {
  primary700: '#333D29',
  primary500: '#656D4A',
  gray700: '#777777',
  gray500: '#C4C4C4',
  white: '#FFFFFF',
};
