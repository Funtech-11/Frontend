import { Link } from 'react-router-dom';
import YoutubeIcon from 'src/assets/images/icons/youtube.svg';
import TwitterIcon from 'src/assets/images/icons/twitter.svg';
import TelegramIcon from 'src/assets/images/icons/telegram.svg';
import VkIcon from 'src/assets/images/icons/vk.svg';
import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.outterContainer}>
      <div className={style.contentContainer}>
        <span className={style.text}>© 2001- 2024 Яндекс</span>
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
          <span className={style.link}>Обратная связь</span>
        </div>
        <ul className={style.socials}>
          <li className={style.social}>
            <Link
              to="https://www.youtube.com/channel/UCTUyoZMfksbNIHfWJjwr5aQ"
              target="blank"
              className={style.socialLink}
            >
              <img
                src={YoutubeIcon}
                alt="Наш канал на YouTube"
                className={style.socialIcon}
              />
            </Link>
          </li>
          <li className={style.social}>
            <Link
              to="https://twitter.com/YaDevelopers"
              target="blank"
              className={style.socialLink}
            >
              <img
                src={TwitterIcon}
                alt="Наш профиль на X (бывший Twitter)"
                className={style.socialIcon}
              />
            </Link>
          </li>
          <li className={style.social}>
            <Link
              to="https://t.me/Yandex4Developers"
              target="blank"
              className={style.socialLink}
            >
              <img
                src={TelegramIcon}
                alt="Наш Telegram-канал"
                className={style.socialIcon}
              />
            </Link>
          </li>
          <li className={style.social}>
            <Link
              to="https://vk.com/yandex4developers"
              target="blank"
              className={style.socialLink}
            >
              <img
                src={VkIcon}
                alt="Наша страница на Vk"
                className={style.socialIcon}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
