import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primary700};

  width: 100%;
  position: static;
  bottom: 0;

  .content {
    margin: 0 auto;
    max-width: 1280px;
    padding: 2rem;

    .links {
      gap: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .link {
        color: ${({ theme }) => theme.white};
        cursor: pointer;

        span {
          display: block;
          margin-bottom: 0.8rem;
        }

        ul li a {
          font-size: 1rem;
          text-transform: none;
        }
      }
    }
  }
`;
