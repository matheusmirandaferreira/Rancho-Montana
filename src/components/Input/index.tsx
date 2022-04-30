import React from 'react';

import * as S from './styles';

type Props = React.HTMLProps<HTMLInputElement> & {
  label: string;
  boxType?: 'text' | 'textarea';
};

export function Input({ boxType, label, ...rest }: Props) {
  return (
    <S.Container>
      <label htmlFor={rest.id}>{label}</label>
      {boxType === 'textarea' ? <textarea placeholder={rest.placeholder}></textarea> : <input type="text" {...rest} />}
    </S.Container>
  );
}
