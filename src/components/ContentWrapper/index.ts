import styled, { css } from 'styled-components';
import { ContentWrapperProps } from '../../lib';

export const ContentWrapper = styled.div<ContentWrapperProps>`
  padding: 2rem;
  margin: 2rem 0 0;

  ${({ theme, custonBackground = 'white' }) => css`
    background-color: ${theme[
      custonBackground === 'white' ? 'background' : 'gray100'
    ]};
  `}

  .content {
    max-width: 1280px;
    margin: 0 auto;
  }
`;
