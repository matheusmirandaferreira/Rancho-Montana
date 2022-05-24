import { BsCloudDownload } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from '../../components/ContentWrapper';
import * as S from './styles';

export function ResponsibleDetails() {
  const { id } = useParams();

  const selected = {
    name: 'Teste',
    birthDate: '11/02/2001',
    description: 'Lorem input a dolar',
    documents: [
      {
        name: 'Certificado',
      },
    ],
    img: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
  };

  return (
    <ContentWrapper>
      <div className="content">
        {selected && (
          <S.Container>
            <img src={selected.img} />
            <div className="infos">
              <div className="title">{selected.name}</div>
              <div className="birth-date">
                Nascimento em {selected.birthDate}
              </div>
              <div className="preview">{selected.description}</div>
              <div className="title documents">Documentos</div>
              <div className="documents-download-group">
                {selected.documents.map((item) => (
                  <button key={item.name}>
                    {item.name}
                    <BsCloudDownload size={24} />
                  </button>
                ))}
              </div>
            </div>
          </S.Container>
        )}
      </div>
    </ContentWrapper>
  );
}
