import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primary700};

  width: 100%;

  .content {
    margin: 0 auto;
    max-width: 1280px;
    padding: 2rem 0;

    .links {
      display: flex;
      justify-content: space-between;

      .link {
        color: ${({ theme }) => theme.white};
        cursor: pointer;

        span {
          display: block;
          margin-bottom: 0.8rem;
          text-decoration: underline;
        }

        ul li a {
          font-size: 1rem;
          text-transform: none;
        }
      }
    }
  }
`;
