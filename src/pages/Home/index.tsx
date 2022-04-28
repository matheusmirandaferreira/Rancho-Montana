import { FaWhatsapp } from 'react-icons/fa';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';

import WelcomeSVG from '../../assets/welcome.svg';
import ComeVisitSVG from '../../assets/come-visit.svg';
import { HomeContent } from '../../components/HomeContent';

import * as S from './styles';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Title } from '../../components/Title';
import { Comment } from '../../components/Comment';
import { Description } from '../../components/Description';
import { Input } from '../../components/Input';

export function Home() {
  const handleClick = () => {
    window.open('https://web.whatsapp.com/send?phone=5511995408181', '_blank');
  };

  return (
    <>
      <Header />
      <Carousel imgs={Array.from({ length: 3 })} />
      <HomeContent
        content="Ficamos muito felizes em te receber aqui, esperamos que goste dessa experiência e que possa aproveitar nosso site.
        Marque uma visita para nos conhecer melhor, temos horários disponíveis em todos os dias da semana, é simple e gratuito."
        img={WelcomeSVG}
        title="Seja bem-vindo"
      />
      <HomeContent
        content={
          <S.ComeVisit>
            Estamos esperando você, venha conhecer nossos animais, agende um
            horário e teremos prazer em recebê-lo, você pode fazer isso
            preenchendo o formulário logo abaixo, ou entre em contato direto
            pelo Whatsapp pelo número <strong>(11) 99540-8181</strong>.<br />
            <button onClick={handleClick}>
              <FaWhatsapp size={18} />
              <span>Entre em contato</span>
            </button>
          </S.ComeVisit>
        }
        img={ComeVisitSVG}
        title="Venha nos visitar"
        reverse
        custonBackground="gray"
      />
      <ContentWrapper>
        <Title>Comentários de clientes</Title>
        <S.CommentsWrapper>
          <Comment
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper, in bibendum tellus sollicitudin. Nunc at est lobortis, egestas velit vitae, tincidunt nibh. Vestibulum fringilla egestas commodo."
            name="Luiz Fernando Tadei"
            img={undefined}
          />
          <Comment
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper, in bibendum tellus sollicitudin. Nunc at est lobortis, egestas velit vitae, tincidunt nibh. Vestibulum fringilla egestas commodo."
            name="Matheus de Miranda Ferreira"
            img={undefined}
          />
        </S.CommentsWrapper>
      </ContentWrapper>
      <ContentWrapper custonBackground="gray">
        <div className="content">
          <Title>Entre em contato</Title>
          <Description>
            Ficou com alguma duvida ou curioso sobre algo? Nos mande uma
            mensagem preenchendo o formulário abaixo
          </Description>
          <form>
            <Input label="Nome" name="name" />
            <Input label="E-mail" name="email" />
            <Input label="Mensagem" name="description" />
          </form>
        </div>
      </ContentWrapper>
    </>
  );
}
