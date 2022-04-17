import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  .profile {
    width: 80px;
    height: 80px;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.white};

    box-shadow: 0 0 12px ${({ theme }) => theme.gray100};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 48px;
      height: 48px;
    }
  }

  .comment {
    color: ${({ theme }) => theme.primary500};
    text-align: center;
  }

  .user-name {
    color: ${({ theme }) => theme.primary700};
    text-transform: uppercase;
    text-align: center;
  }
`;
