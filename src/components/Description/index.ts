import styled, { css } from 'styled-components';

export const Description = styled.div`
  font-size: 1.2rem;
  font-weight: 200;

  text-align: center;

  margin: 1rem 0;

  ${({ theme }) => css`
    color: ${theme.primary500};
  `}
`;
