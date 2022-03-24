import { useEffect } from 'react';
import { useState } from 'react';
import * as S from './styles';

type Props = {
  imgs: string[];
};

export function Carousel({ imgs }: Props) {
  const [focused, setFocused] = useState(0);

  const handleChange = (index: number) => {
    setFocused(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFocused(focused + 1 > imgs.length - 1 ? 0 : focused + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [focused]);

  //? do scroll based in https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs
  //? to calculate the position of the carousel use https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element

  return (
    <S.Container>
      <S.ImagesWrapper>
        {imgs.map((img, index) => (
          <S.ImageButton
            key={index}
            isFocused={index === focused}
            onClick={() => handleChange(index)}
          >
            <img src={img} />
          </S.ImageButton>
        ))}
      </S.ImagesWrapper>
      <S.CountsWrapper>
        {imgs.map((_, index) => (
          <button key={index} onClick={() => handleChange(index)}>
            <S.Count isFocused={index === focused}></S.Count>
          </button>
        ))}
      </S.CountsWrapper>
    </S.Container>
  );
}
