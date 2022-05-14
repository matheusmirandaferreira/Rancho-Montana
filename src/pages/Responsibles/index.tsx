import { Card } from '../../components/Card';
import { CardsWrapper } from '../../components/CardsWrapper';
import * as S from './styles';

export function Responsibles() {
  const responsibles = [
    {
      uuid: 'asdfasd-asdfasq-erwfve3r',
      img: '',
      name: 'João da Silva',
      description: 'Responsável pela equipe de cavalos',
      age: '25',
    },
  ];

  return (
    <CardsWrapper title="Responsáveis">
      <div className="cards">
        {responsibles.map((responsible) => (
          <Card
            key={responsible.uuid}
            img={responsible.img}
            subtitle={responsible.description}
            title={responsible.name}
          >
            <S.CardInfos></S.CardInfos>
          </Card>
        ))}
      </div>
    </CardsWrapper>
  );
}
