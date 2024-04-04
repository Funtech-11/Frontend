import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.outterContainer}>
      <div className={style.contentContainer}>
        <Link to="/" className={style.logoLink}>
          Яндекс.Ивенты
        </Link>
        <div className={style.textWrapper}>
          <span className={style.text}>© 2001- 2024 Яндекс</span>
          <Link to="/" className={style.link}>
            Политика конфиденциальности
          </Link>
          <Link to="/" className={style.link}>
            Пользовательское соглашение
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
