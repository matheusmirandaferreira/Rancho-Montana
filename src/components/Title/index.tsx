import styled, { css } from 'styled-components';

type Props = {
  removeItalic?: boolean;
};

export const Title = styled.h2<Props>`
  font-size: 1.5rem;
  font-weight: 400;

  text-align: center;
  text-transform: uppercase;

  margin: 1rem 0;

  ${({ theme, removeItalic }) => css`
    font-style: ${removeItalic ? 'normal' : 'italic'};
    color: ${theme.primary700};
  `}
`;
