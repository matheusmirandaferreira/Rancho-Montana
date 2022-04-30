import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme: THEME }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      line-height: 1.6;
    }

    body {
      font-size: 100%;
      overflow-x: hidden;
      font-family: 'Montserrat', sans-serif;
      background-color: ${THEME.white};

      &::-webkit-scrollbar {
        width: 5px;
        border: 0;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${THEME.primary500};
        border-radius: 2.5px;
      }
    }

    input,
    textarea,
    button {
      font-family: 'Montserrat', sans-serif;
      &::placeholder {
        font-weight: 200;
      }
    }

    a {
      text-decoration: none;
      color: ${THEME.white};
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 300;

      &:visited {
        color: ${THEME.gray500};
      }
    }

    ul {
      list-style: none;
    }

    button {
      padding: 0.8rem 1.6rem;
      font-size: 0.8125rem;

      color: ${THEME.white};
      background-color: ${THEME.primary700};

      border: 0;
      outline: 0;

      cursor: pointer;
      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        filter: brightness(0.9);
      }

      &:focus {
        box-shadow: 0 0 12px ${THEME.primary500};
      }
    }
  `}
`;

export const theme = {
  primary700: '#333D29',
  primary500: '#656D4A',
  gray700: '#777777',
  gray500: '#C4C4C4',
  gray100: '#EDEDED',
  white: '#FFFFFF',
};
