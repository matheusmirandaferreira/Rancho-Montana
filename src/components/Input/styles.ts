import styled from 'styled-components';

export const Container = styled.div`
  label {
    display: block;

    font-size: 1.2rem;
    font-weight: 200;
    text-transform: uppercase;

    color: ${({ theme }) => theme.primary500};

    margin-bottom: 0.8rem;
  }

  input,
  textarea {
    height: 40px;
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    width: 100%;
    outline: 0;
    border: 0;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.primary700};
    margin-bottom: 1.6rem;
  }

  textarea {
    min-height: 250px;
    resize: vertical;
  }
`;
