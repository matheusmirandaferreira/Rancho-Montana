import { useState } from 'react';
import * as S from './styles';
import { ImageNotSupportedOutlined } from '@mui/icons-material';

type Props = {
  imgs: string[];
};

export function HorsesDetailsCarousel({ imgs }: Props) {
  const [selectedImg, setSelectedImg] = useState(0);
  const handleSelectImg = (index: number) => setSelectedImg(index);

  return (
    <S.Container>
      <div className="expanded-img">
        {imgs[selectedImg] ? (
          <img src={imgs[selectedImg]} />
        ) : (
          <ImageNotSupportedOutlined />
        )}
      </div>
      <div className="minor-imgs-group">
        {imgs.map((item, index) => (
          <div className="minor-img" key={index}>
            {item ? (
              <img src={item} onClick={() => handleSelectImg(index)} />
            ) : (
              <ImageNotSupportedOutlined />
            )}
          </div>
        ))}
      </div>
    </S.Container>
  );
}
