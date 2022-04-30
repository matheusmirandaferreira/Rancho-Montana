import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primary700};

  width: 100%;

  .content {
    max-width: 1280px;
    padding: 2rem;
  }
`;
