import React from 'react';
import { Title } from '../Title';
import * as S from './styles';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function CardsWrapper({ children, title }: Props) {
  return (
    <S.Container>
      <Title removeItalic>{title}</Title>
      <div className="cards">{children}</div>
    </S.Container>
  );
}
