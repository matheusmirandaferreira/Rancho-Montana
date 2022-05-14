import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <ul>
        <li>
          <a
            className={`${window.location.pathname === '/' && 'active'}`}
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={`${window.location.pathname === '/horses' && 'active'}`}
            href="/horses"
          >
            Cavalos
          </a>
        </li>
        <li>
          <a
            className={`${
              window.location.pathname === '/responsibles' && 'active'
            }`}
            href="/responsibles"
          >
            Responsáveis
          </a>
        </li>
      </ul>
    </S.Container>
  );
}
