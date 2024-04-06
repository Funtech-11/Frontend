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
          <span className={style.text}>8 800 250-96-39</span>
          <Link
            to="https://yandex.ru/legal/confidential/"
            className={style.link}
          >
            Политика конфиденциальности
          </Link>
          <Link to="https://yandex.ru/legal/rules/" className={style.link}>
            Пользовательское соглашение
          </Link>
        </div>
        <span className={style.text}>© 2001- 2024 Яндекс</span>
      </div>
    </div>
  </footer>
);

export default Footer;
