import { HorseCardProps } from '../../lib';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function HorseCard({
  birthDate,
  breed,
  color,
  img,
  name,
  walkingStyle,
  uuid,
}: HorseCardProps) {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => navigate('/horses/' + id);

  return (
    <S.Container>
      <header className="header">
        <img src={img} />
      </header>
      <div className="content">
        <div className="title">{name}</div>
        <div className="birth-date">Nascimento em {birthDate}</div>
        <div className="infos">
          <div className="row">
            <span className="label">Raça</span>
            <span className="value">{breed}</span>
          </div>
          <div className="row">
            <span className="label">Cor</span>
            <span className="value">{color}</span>
          </div>
          <div className="row">
            <span className="label">Andamento</span>
            <span className="value">{walkingStyle}</span>
          </div>
        </div>
        <button onClick={() => handleNavigate(uuid)}>Saiba mais</button>
      </div>
    </S.Container>
  );
}
