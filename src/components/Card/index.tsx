import React from 'react';
import * as S from './styles';

type Props = {
  onClick?(): void;
  img: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export function Card({ img, subtitle, title, children, onClick }: Props) {
  return (
    <S.Container onClick={onClick}>
      <header className="header">
        <img src={img} />
      </header>
      <div className="content">
        <div className="title">{title}</div>
        <div className="birth-date">{subtitle}</div>
        <div className="infos">{children}</div>
        <button>Saiba mais</button>
      </div>
    </S.Container>
  );
}
