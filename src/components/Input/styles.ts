import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: block;

    font-size: 1.4rem;
    text-transform: uppercase;

    font-weight: 200;

    color: ${({ theme }) => theme.primary700};
  }

  input {
    height: 40px;
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    width: 50%;
    outline: 0;
    border: 0;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);

    margin-bottom: 1.6rem;
  }
`;
