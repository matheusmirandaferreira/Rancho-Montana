import unknowUser from '../../assets/unknow-user.svg';

import * as S from './styles';

type Props = {
  name: string;
  img?: string;
  comment: string;
};

export function Comment({ comment, img, name }: Props) {
  return (
    <S.Container>
      <div className="profile">
        <img src={img ?? unknowUser} />
      </div>

      <div className="comment">
        <span>{`"${comment}"`}</span>
      </div>

      <div className="user-name">
        <span>{name}</span>
      </div>
    </S.Container>
  );
}
