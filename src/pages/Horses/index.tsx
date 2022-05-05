import { HorseCard } from '../../components/HorseCard';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Title } from '../../components/Title';
import { HorseCardProps } from '../../lib';
import * as S from './styles';

export function Horses() {
  const horses: HorseCardProps[] = [
    {
      uuid: '1234-123412-12341-aqefdfg',
      birthDate: '14/05/2015',
      breed: 'Manga larga',
      color: 'Castanho',
      img: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
      name: 'Tornado',
      walkingStyle: 'Marcha picada',
    },
    {
      uuid: '1234-123412-12341-qrnbvc',
      birthDate: '14/05/2015',
      breed: 'Manga larga',
      color: 'Castanho',
      img: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
      name: 'Tornado',
      walkingStyle: 'Marcha picada',
    },
    {
      uuid: '1234-123412-12341-ççvxkj',
      birthDate: '14/05/2015',
      breed: 'Manga larga',
      color: 'Castanho',
      img: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
      name: 'Tornado',
      walkingStyle: 'Marcha picada',
    },
    {
      uuid: '1234-123412-12341-uiygbo',
      birthDate: '14/05/2015',
      breed: 'Manga larga',
      color: 'Castanho',
      img: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
      name: 'Tornado',
      walkingStyle: 'Marcha picada',
    },
  ];

  return (
    <S.Container>
      <Title removeItalic>Nossos Cavalos</Title>
      <ContentWrapper>
        <div className="content">
          <div className="horses">
            {horses.map((horse) => (
              <HorseCard key={horse.uuid} {...horse} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </S.Container>
  );
}
