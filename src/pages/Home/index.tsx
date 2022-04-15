import { Title } from '../../components/Title';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';

import WelcomeSVG from '../../assets/welcome.svg';

// import * as S from './styles';

export function Home() {
  return (
    <>
      <Header />
      <Carousel imgs={Array.from({ length: 3 })} />
      <Title>Seja bem-vindo</Title>
      <img src={WelcomeSVG} />
    </>
  );
}
