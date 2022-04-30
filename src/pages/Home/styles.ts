import styled from 'styled-components';

export const ComeVisit = styled.div`
  button {
    float: right;
    margin: 1rem 0;
    background-color: #4aca59;

    &:focus {
      box-shadow: 0 0 12px #4aca59;
    }
  }
`;

export const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  margin: 2rem auto;
  max-width: 1018px;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  form {
    width: 48%;
  }

  img {
    max-width: 48%;
  }
`;
