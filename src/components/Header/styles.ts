import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;

  background-color: ${({ theme }) => theme.primary700};

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    li {
      color: ${({ theme }) => theme.white};
    }
  }
`;
