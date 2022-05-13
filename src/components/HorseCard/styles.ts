import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
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
  `}
`;
