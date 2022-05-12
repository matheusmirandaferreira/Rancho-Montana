import { useParams } from 'react-router-dom';
import { ContentWrapper } from '../../components/ContentWrapper';
import * as S from './styles';

export function HorsesDetails() {
  const { id } = useParams();
  const horses = [
    {
      uuid: '1234-123412-12341-aqefdfg',
      birthDate: '14/05/2015',
      breed: 'Manga larga',
      color: 'Castanho',
      imgs: [
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
      ],
      name: 'Tornado',
      walkingStyle: 'Marcha picada',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper, in bibendum tellus sollicitudin. Nunc at est lobortis, egestas velit vitae, tincidunt nibh. Vestibulum fringilla egestas commodo.',
    },
    {
      uuid: '1234-123412-12341-qrnbvc',
      birthDate: '14/05/2015',
      breed: 'Manga larga',
      color: 'Castanho',
      imgs: [
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
      ],
      name: 'Tornado',
      walkingStyle: 'Marcha picada',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper, in bibendum tellus sollicitudin. Nunc at est lobortis, egestas velit vitae, tincidunt nibh. Vestibulum fringilla egestas commodo.',
    },
    {
      uuid: '1234-123412-12341-ççvxkj',
      birthDate: '14/05/2015',
      breed: 'Manga larga',
      color: 'Castanho',
      imgs: [
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
      ],
      name: 'Tornado',
      walkingStyle: 'Marcha picada',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper, in bibendum tellus sollicitudin. Nunc at est lobortis, egestas velit vitae, tincidunt nibh. Vestibulum fringilla egestas commodo.',
    },
    {
      uuid: '1234-123412-12341-uiygbo',
      birthDate: '14/05/2015',
      breed: 'Manga larga',
      color: 'Castanho',
      imgs: [
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
      ],
      name: 'Tornado',
      walkingStyle: 'Marcha picada',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper, in bibendum tellus sollicitudin. Nunc at est lobortis, egestas velit vitae, tincidunt nibh. Vestibulum fringilla egestas commodo.',
    },
  ];

  const selectedHorse = horses.find((item) => item.uuid === id);

  return (
    <ContentWrapper>
      <div className="content">
        {selectedHorse && (
          <S.Container>
            <div className="carousel">
              <img src={selectedHorse.imgs[0]} />
            </div>
            <div className="infos">
              <div className="title">{selectedHorse.name}</div>
              <div className="birth-date">
                Nascimento em {selectedHorse.birthDate}
              </div>
              <div className="preview">{selectedHorse.preview}</div>
              <div className="preview">{selectedHorse.description}</div>
              <div className="title">Documentos</div>
            </div>
          </S.Container>
        )}
      </div>
    </ContentWrapper>
  );
}
