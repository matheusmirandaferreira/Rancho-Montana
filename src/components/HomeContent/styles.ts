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
  }

  .img-box {
    max-width: 48%;
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
