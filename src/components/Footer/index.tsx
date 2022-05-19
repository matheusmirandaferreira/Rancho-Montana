import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import * as S from './styles';

export function Footer() {
  const { Link: SCROLL_LINK } = Scroll;

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('popstate'));
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
                <SCROLL_LINK to="welcome" smooth={true} duration={200}>
                  Seja Bem-Vindo
                </SCROLL_LINK>
              </li>
              <li>
                <SCROLL_LINK to="visit-us" smooth={true} duration={200}>
                  Venha nos Visitar
                </SCROLL_LINK>
              </li>
              <li>
                <SCROLL_LINK to="comments" smooth={true} duration={200}>
                  Comentários
                </SCROLL_LINK>
              </li>
              <li>
                <SCROLL_LINK to="contact-us" smooth={true} duration={200}>
                  Fale Conosco
                </SCROLL_LINK>
              </li>
            </ul>
          </div>
          <div className="link">
            <span>
              <Link onClick={handleNavigate} to="horses">
                Cavalos
              </Link>
            </span>
          </div>
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
