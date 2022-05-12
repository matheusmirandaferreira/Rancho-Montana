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

      img {
        width: 100%;
        height: 300px;
        border-radius: 0.5rem;
      }
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
        margin: 1rem;
      }
    }
  `}
`;
