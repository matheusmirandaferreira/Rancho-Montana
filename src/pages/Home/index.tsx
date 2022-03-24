import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';

import * as S from './styles';

export function Home() {
  return (
    <>
      <Header />
      <Carousel imgs={Array.from({ length: 3 })} />
    </>
  );
}
