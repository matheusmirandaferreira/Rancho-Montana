import { HorseCardProps } from '../../lib';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { Card } from '../Card';

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
    <Card
      img={img}
      subtitle={`Nascimento em ${birthDate}`}
      title={name}
      onClick={() => handleNavigate(uuid)}
    >
      <S.Container>
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
      </S.Container>
    </Card>
  );
}
