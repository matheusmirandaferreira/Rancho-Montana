import styled from 'styled-components';

export const Container = styled.div`
  .expanded-img {
    width: 100%;

    img {
      width: 100%;
      height: 300px;
      border-radius: 0.5rem;
      object-fit: cover;
      box-shadow: 0 0 8px ${({ theme }) => theme.gray500};
    }
  }

  .minor-imgs-group {
    display: flex;
    gap: 0.8rem;

    img {
      cursor: pointer;
      width: 64px;
      height: 64px;
      object-fit: cover;
      border-radius: 0.5rem;
      box-shadow: 0 0 1rem ${({ theme }) => theme.gray500};
    }
  }
`;
