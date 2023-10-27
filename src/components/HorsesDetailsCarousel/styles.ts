import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    .expanded-img {
      width: 100%;
      height: 300px;
      border-radius: 0.5rem;
      background-color: ${theme.white};
      box-shadow: 0 0 8px ${theme.gray500};

      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 1rem;

      svg {
        color: ${theme.primary500};
        font-size: 3rem;
      }

      img {
        width: 100%;
        height: 300px;

        border-radius: 0.5rem;
        object-fit: cover;
      }
    }

    .minor-imgs-group {
      display: flex;
      gap: 0.8rem;

      .minor-img {
        width: 64px;
        height: 64px;
        border-radius: 0.5rem;
        background-color: ${theme.white};
        box-shadow: 0 0 8px ${theme.gray500};
        color: ${theme.primary500};

        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        cursor: pointer;
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    }
  `}
`;
