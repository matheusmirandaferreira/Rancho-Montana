import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/horses">Cavalos</a>
        </li>
        <li>
          <a href="/responsible">Responsáveis</a>
        </li>
      </ul>
    </S.Container>
  );
}
