import React from 'react';

import * as S from './styles';

type Props = React.HTMLProps<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...rest }: Props) {
  return (
    <S.Container>
      <label htmlFor={rest.id}>{label}</label>
      <input type="text" {...rest} />
    </S.Container>
  );
}
