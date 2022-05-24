import { ContentWrapper } from '../../components/ContentWrapper';
import { Description } from '../../components/Description';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';
import ContactUsSVG from '../../assets/contact-us.svg';

import * as S from './styles';

export function ContactUs() {
  return (
    <ContentWrapper custonBackground="gray">
      <div className="content">
        <Title>Entre em contato</Title>
        <Description>
          Ficou com alguma duvida ou curioso sobre algo? Nos mande uma mensagem
          <br />
          preenchendo o formulário abaixo
        </Description>
        <S.FormWrapper>
          <form>
            <Input label="Nome" name="name" placeholder="Informe seu nome" />
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
  );
}
