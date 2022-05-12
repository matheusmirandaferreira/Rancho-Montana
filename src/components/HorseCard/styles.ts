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
      padding-top: 0.8rem;

      .title {
        font-size: 1.125rem;
        color: ${theme.primary700};
        text-align: center;
        text-transform: uppercase;
      }

      .birth-date {
        text-align: center;
        color: ${theme.primary500};
        font-size: 0.75rem;
      }

      button {
        width: 100%;
      }

      .infos {
        margin-top: 0.8rem;
        padding: 0.875rem;

        .row {
          font-size: 0.875rem;
          margin-bottom: 1rem;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.875rem;

          .label {
            color: ${theme.gray700};
          }

          .value {
            color: ${theme.primary500};
            text-transform: uppercase;
          }
        }
      }
    }
  `}
`;
