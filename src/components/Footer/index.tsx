import { Link } from 'react-router-dom';

import * as S from './styles';

export function Footer() {
  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <div className="content">
        <div className="links">
          <div className="link">
            <span>
              <Link onClick={handleNavigate} to="/">
                Home
              </Link>
            </span>
            <ul>
              <li>
                <Link to="/#welcome">Seja Bem-Vindo</Link>
              </li>
              <li>
                <Link to="/#visit-us">Venha nos Visitar</Link>
              </li>
              <li>
                <Link to="/#comments">Comentários</Link>
              </li>
              <li>
                <Link to="/#contact-us">Fale Conosco</Link>
              </li>
            </ul>
          </div>
          {/* <div className="link">
            <span>
              <Link onClick={handleNavigate} to="horses">
                Cavalos
              </Link>
            </span>
          </div> */}
          <div className="link">
            <span>
              <Link onClick={handleNavigate} to="responsibles">
                Responsáveis
              </Link>
            </span>
          </div>
          <div className="link">
            <span>
              <Link onClick={handleNavigate} to="contact-us">
                Contato
              </Link>
            </span>
          </div>
        </div>
      </div>
    </S.Container>
  );
}
