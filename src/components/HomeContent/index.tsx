import React from 'react';
import { ContentWrapperProps } from '../../lib';
import { ContentWrapper } from '../ContentWrapper';
import { Title } from '../Title';
import * as S from './styles';

type Props = ContentWrapperProps & {
  img: string;
  title: string;
  content: React.ReactNode;
  reverse?: boolean;
};

export function HomeContent({ content, img, title, reverse, ...rest }: Props) {
  return (
    <ContentWrapper {...rest}>
      <div className="content">
        <Title>{title}</Title>
        <S.Content reverse={reverse}>
          <div className="text-box">{content}</div>
          <div className="img-box">
            <img src={img} />
          </div>
        </S.Content>
      </div>
    </ContentWrapper>
  );
}
