import { HorseCardProps } from '../../lib';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { Card } from '../Card';

export function HorseCard(props: HorseCardProps) {
  const { image, birthdate, nmhorse, uuidhorse, color, pace, race } = props;

  const navigate = useNavigate();

  const handleNavigate = (id: string) => navigate('/horses/' + id);

  return (
    <Card
      img={image}
      subtitle={`Nascimento em ${birthdate.split('-').reverse().join('/')}`}
      title={nmhorse}
      onClick={() => handleNavigate(uuidhorse)}
    >
      <S.Container>
        <div className="row">
          <span className="label">Raça</span>
          <span className="value">{race.nmrace}</span>
        </div>
        <div className="row">
          <span className="label">Cor</span>
          <span className="value">{color.nmcolor}</span>
        </div>
        <div className="row">
          <span className="label">Andamento</span>
          <span className="value">{pace.nmpace}</span>
        </div>
      </S.Container>
    </Card>
  );
}
