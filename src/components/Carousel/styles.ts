import styled, { css } from 'styled-components';

type ImageWrapperProps = {
  position?: number;
};

type ImageProps = {
  isFocused?: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 471px;

  padding: 2rem;
  padding-bottom: 4rem;

  position: relative;
  background-color: ${({ theme }) => theme.primary700};
`;

export const ImagesWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: all 0.7s ease-in-out;
  height: 370px;

  ${({ position }) => css`
    transform: translateX(${position ?? 0}px);
  `}
`;

export const ImageButton = styled.button<ImageProps>`
  background-color: #fff;
  box-shadow: 0 2px 5px ${({ theme }) => theme.primary500};

  transition: all 0.7s ease-in-out;

  ${({ isFocused }) =>
    isFocused
      ? css`
          width: 800px;
          height: 370px;
        `
      : css`
          width: 500px;
          height: 300px;
          filter: brightness(0.7);
        `}

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CountsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 1rem;

  button {
    padding: 8px;
    background-color: transparent;
    border: 0;
    outline: 0;
    transform: none;
    box-shadow: none;
  }
`;

export const Count = styled.span<ImageProps>`
  width: 6px;
  height: 6px;

  border-radius: 50%;
  display: inline-block;

  ${({ isFocused, theme }) => css`
    background-color: ${!isFocused ? theme.gray700 + '80' : theme.gray500};
  `}
`;
