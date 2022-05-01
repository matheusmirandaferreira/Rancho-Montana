import * as Scroll from 'react-scroll';
import * as S from './styles';

export function Footer() {
  const { Link } = Scroll;
  return (
    <S.Container>
      <div className="content">
        <div className="links">
          <div className="link">
            <span>Home</span>
            <ul>
              <li>
                <Link to="welcome" smooth={true} duration={200}>
                  Seja Bem-Vindo
                </Link>
              </li>
              <li>
                <Link to="visit-us" smooth={true} duration={200}>
                  Venha nos Visitar
                </Link>
              </li>
              <li>
                <Link to="comments" smooth={true} duration={200}>
                  Comentários
                </Link>
              </li>
              <li>
                <Link to="contact-us" smooth={true} duration={200}>
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
          <div className="link">
            <span>Cavalos</span>
          </div>
          <div className="link">
            <span>Responsáveis</span>
          </div>
          <div className="link">
            <span>Contato</span>
          </div>
        </div>
      </div>
    </S.Container>
  );
}
