import styled, { css } from 'styled-components';
import { ContentWrapperProps } from '../../lib';

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${({ theme, custonBackground = 'white' }) => css`
    background-color: ${theme[
      custonBackground === 'white' ? 'background' : 'gray100'
    ]};
  `}

  .content {
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
