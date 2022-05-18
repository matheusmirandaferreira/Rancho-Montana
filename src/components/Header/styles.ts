import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/GlobalStyles';

const slideIn = keyframes`
  from {
    width: 0;
  } 
  to {
    width: 100%;
  }
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 80px;

  background-color: ${({ theme }) => theme.primary700};

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    li {
      color: ${({ theme }) => theme.white};
      position: relative;
      text-align: center;

      a.active {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        &::after {
          content: '';

          position: relative;

          height: 1px;
          background-color: ${theme.background};

          animation: ${slideIn} 1s ease forwards;
        }
      }
    }
  }
`;
