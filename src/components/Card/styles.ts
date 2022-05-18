import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 350px;
    cursor: pointer;

    padding: 0.8rem;
    border-radius: 0.4rem;

    background-color: ${theme.white};
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);

    .header {
      width: 100%;
      height: 217px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
      }
    }

    .content {
      padding: 0.8rem 0 0 0;

      .title {
        font-size: 1.125rem;
        color: ${theme.primary700};
        text-align: center;
        text-transform: uppercase;
      }

      .birth-date {
        text-align: center;
        color: ${theme.primary500};
        font-size: 0.875rem;
      }

      button {
        width: 100%;
      }

      .infos {
        margin-top: 0.8rem;
        padding: 0.875rem;
      }
    }
  `}
`;
