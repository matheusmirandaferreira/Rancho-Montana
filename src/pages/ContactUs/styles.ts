import styled from 'styled-components';

export const Container = styled.div``;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  form {
    width: 48%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  img {
    max-width: 48%;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
