import styled, { css } from 'styled-components';

export const Title = styled.h2`
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 400;

  text-align: center;
  text-transform: uppercase;

  margin: 1rem 0;

  ${({ theme }) => css`
    color: ${theme.primary500};
  `}
`;
