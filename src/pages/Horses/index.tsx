import { HorseCard } from '../../components/HorseCard';
import { ContentWrapper } from '../../components/ContentWrapper';
import { HorseCardProps } from '../../lib';
import { CardsWrapper } from '../../components/CardsWrapper';
import { useQuery } from '@tanstack/react-query';
import { getHorses } from '../../services/horses';
import { Loader } from '../../components/Loader';

export function Horses() {
  const { isLoading, data, isError } = useQuery<HorseCardProps[]>({
    queryFn: getHorses,
    queryKey: ['HORSES_LIST'],
  });

  if (isLoading) return <Loader.Page />;

  if (isError) return <></>;

  return (
    <ContentWrapper>
      <div className="content">
        <CardsWrapper title="Nossos Cavalos">
          <div className="cards">
            {data.map((horse, index) => (
              <HorseCard key={index} {...horse} />
            ))}
          </div>
        </CardsWrapper>
      </div>
    </ContentWrapper>
  );
}
