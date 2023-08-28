import { BsCloudDownload } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from '../../components/ContentWrapper';
import { HorsesDetailsCarousel } from '../../components/HorsesDetailsCarousel';
import * as S from './styles';
import { useQuery } from '@tanstack/react-query';
import { getHorseDetails } from '../../services/horses';
import { HorseCardProps, ResponseProps } from '../../lib';
import { Loader } from '../../components/Loader';

export function HorsesDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery<
    ResponseProps<HorseCardProps>,
    any
  >({
    queryFn: () => getHorseDetails(id),
    queryKey: ['HORSE_DETAILS'],
  });

  if (isLoading) return <Loader.Page />;

  if (isError) return <></>;

  return (
    <ContentWrapper>
      <div className="content">
        <S.Container>
          <div className="carousel">
            <HorsesDetailsCarousel imgs={[data.data.image || '']} />
          </div>
          <div className="infos">
            <div className="title">{data.data.nmhorse}</div>
            <div className="birth-date">
              Nascimento em {data.data.birthdate.split('-').reverse().join('/')}
            </div>
            <div className="preview">
              {data.data.gender === 'M' ? 'Cavalo' : 'Égua'}{' '}
              {data.data.race.nmrace.toLowerCase()} com pelagem{' '}
              {data.data.color.nmcolor.toLowerCase()} e de andamento{' '}
              {data.data.pace.nmpace.toLowerCase()}
            </div>
            <div className="preview">{data.data.description}</div>
            {/* <div className="title documents">Documentos</div> */}
            {/* <div className="documents-download-group">
              {selectedHorse.documents.map((item) => (
                <button key={item.name}>
                  {item.name}
                  <BsCloudDownload size={24} />
                </button>
              ))}
            </div> */}
          </div>
        </S.Container>
      </div>
    </ContentWrapper>
  );
}
