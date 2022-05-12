import { useState } from 'react';
import * as S from './styles';

type Props = {
  imgs: string[];
};

export function HorsesDetailsCarousel({ imgs }: Props) {
  const [selectedImg, setSelectedImg] = useState(0);
  const handleSelectImg = (index: number) => setSelectedImg(index);

  return (
    <S.Container>
      <div className="expanded-img">
        <img src={imgs[selectedImg]} />
      </div>
      <div className="minor-imgs-group">
        {imgs.map((item, index) => (
          <img key={item} src={item} onClick={() => handleSelectImg(index)} />
        ))}
      </div>
    </S.Container>
  );
}
