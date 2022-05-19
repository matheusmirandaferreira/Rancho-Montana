import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';

export function Header() {
  const { pathname } = useLocation();

  return (
    <S.Container>
      <ul>
        <li>
          <Link to="/" className={`${pathname === '/' && 'active'}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === '/horses' && 'active'}`}
            to="/horses"
          >
            Cavalos
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === '/responsibles' && 'active'}`}
            to="/responsibles"
          >
            Responsáveis
          </Link>
        </li>
      </ul>
    </S.Container>
  );
}
