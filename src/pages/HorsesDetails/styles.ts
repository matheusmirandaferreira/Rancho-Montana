import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 1088px;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    margin: auto;

    .carousel {
      width: 45%;
    }

    .infos {
      width: 45%;

      .title {
        text-transform: uppercase;
        font-size: 1.125rem;
        color: ${theme.primary700};
      }

      .birth-date {
        margin: 1rem 0;
        color: ${theme.primary500};
        font-size: 0.75rem;
      }

      .preview {
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${theme.primary500};
        font-weight: 400;
        margin: 1rem 0;
      }

      .documents {
        margin: 1rem 0;
      }

      .documents-download-group {
        margin: 1rem 0;
        display: flex;
        gap: 1rem;

        button {
          background: linear-gradient(
            133.39deg,
            #ededed 2.66%,
            rgba(196, 196, 196, 0) 100%,
            #e2e2e2 100%
          );
          color: ${theme.primary500};

          &:hover {
            filter: brightness(0.9);
          }

          &:focus,
          &:active {
            box-shadow: 0 0 0.5rem #ededed;
          }
        }
      }

      .click-to-call {
        margin: 1rem 0;
      }
    }
  `}
`;
