import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Comment } from '../../components/Comment';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Description } from '../../components/Description';
import { HomeContent } from '../../components/HomeContent';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';

import WelcomeSVG from '../../assets/welcome.svg';
import ComeVisitSVG from '../../assets/come-visit.svg';
import ContactUsSVG from '../../assets/contact-us.svg';
import * as S from './styles';

export function Home() {
  const { Element, scroller } = Scroll;

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scroller.scrollTo(hash.slice(1), {});
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      {/* <Carousel imgs={Array.from({ length: 3 })} /> */}
      <Element name="welcome">
        <HomeContent
          content="Ficamos muito felizes em te receber aqui, esperamos que goste dessa experiência e que possa aproveitar nosso site.
        Marque uma visita para nos conhecer melhor, temos horários disponíveis, é simples e gratuito."
          img={WelcomeSVG}
          title="Seja bem-vindo"
        />
      </Element>
      <Element name="visit-us">
        <HomeContent
          content={
            <S.ComeVisit>
              Estamos esperando você, venham conhecer nossos animais, agende um
              horário e teremos prazer em recebê-los, você pode fazer isso
              clicando aqui e preenchendo o formulário
            </S.ComeVisit>
          }
          img={ComeVisitSVG}
          title="Venha nos visitar"
          reverse
          custonBackground="gray"
        />
      </Element>

      <Element name="comments">
        <ContentWrapper>
          <div className="content">
            <Title>Comentários de clientes</Title>
            <S.CommentsWrapper>
              <Comment
                comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper, in bibendum tellus sollicitudin. Nunc at est lobortis, egestas velit vitae, tincidunt nibh. Vestibulum fringilla egestas commodo."
                name="Luis Fernando Tadei"
                img={undefined}
              />
              <Comment
                comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus nunc at neque ullamcorper, in bibendum tellus sollicitudin. Nunc at est lobortis, egestas velit vitae, tincidunt nibh. Vestibulum fringilla egestas commodo."
                name="Matheus de Miranda Ferreira"
                img={undefined}
              />
            </S.CommentsWrapper>
          </div>
        </ContentWrapper>
      </Element>

      <Element name="contact-us">
        <ContentWrapper custonBackground="gray">
          <div className="content">
            <Title>Entre em contato</Title>
            <Description>
              Ficou com alguma duvida ou curioso sobre algo? Nos mande uma
              mensagem preenchendo o formulário abaixo
            </Description>
            <S.FormWrapper>
              <form>
                <Input
                  label="Nome"
                  name="name"
                  placeholder="Informe seu nome"
                />
                <Input
                  label="E-mail"
                  name="email"
                  placeholder="Informe seu e-mail"
                />
                <Input
                  label="Mensagem"
                  name="description"
                  boxType="textarea"
                  placeholder="Escreva aqui seu comentário"
                />
                <button type="button">Enviar</button>
              </form>
              <img src={ContactUsSVG} />
            </S.FormWrapper>
          </div>
        </ContentWrapper>
      </Element>
    </>
  );
}
