import { Card } from '../../components/Card';
import { CardsWrapper } from '../../components/CardsWrapper';
import { ContentWrapper } from '../../components/ContentWrapper';
import * as S from './styles';

export function Responsibles() {
  const responsibles = [
    {
      uuid: 'asdfasd-asdfasq-erwfve3r',
      img: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'João da Silva',
      description: 'Responsável pela equipe de cavalos',
      age: '25',
    },
    {
      uuid: 'asdfasd-asdfasq-erwfve4r',
      img: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'João da Silva',
      description: 'Responsável pela equipe de cavalos',
      age: '25',
    },
    {
      uuid: 'asdfasd-asdfasq-erwfve5r',
      img: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'João da Silva',
      description: 'Responsável pela equipe de cavalos',
      age: '25',
    },
    {
      uuid: 'asdfasd-asdfasq-erwfve6r',
      img: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'João da Silva',
      description: 'Responsável pela equipe de cavalos',
      age: '25',
    },
  ];

  return (
    <ContentWrapper>
      <div className="content">
        <CardsWrapper title="Responsáveis">
          <div className="cards">
            {responsibles.map((responsible) => (
              <Card
                key={responsible.uuid}
                img={responsible.img}
                subtitle={`${responsible.age} anos`}
                title={responsible.name}
              >
                <S.CardInfos>{responsible.description}</S.CardInfos>
              </Card>
            ))}
          </div>
        </CardsWrapper>
      </div>
    </ContentWrapper>
  );
}
