import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export function Header() {
  const [route, setRoute] = useState('/');

  const handleRoute = (route: string) => {
    setRoute(route);
  };

  return (
    <S.Container>
      <ul>
        <li>
          <Link
            onClick={() => handleRoute('/')}
            to="/"
            className={`${route === '/' && 'active'}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleRoute('/horses')}
            className={`${route === '/horses' && 'active'}`}
            to="/horses"
          >
            Cavalos
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleRoute('/responsibles')}
            className={`${route === '/responsibles' && 'active'}`}
            to="/responsibles"
          >
            Responsáveis
          </Link>
        </li>
      </ul>
    </S.Container>
  );
}
