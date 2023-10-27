import styled, { css } from 'styled-components';

type ContentProps = {
  reverse?: boolean;
};

export const Content = styled.div<ContentProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .text-box {
    font-size: 1.125rem;
    max-width: 50%;
    color: ${({ theme }) => theme.primary500};

    @media (max-width: 768px) {
      max-width: 100%;
      text-align: center !important;
    }
  }

  .img-box {
    max-width: 48%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row-reverse;

      .text-box {
        text-align: right;
      }
    `}
`;
