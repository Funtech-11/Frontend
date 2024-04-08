import { Link, NavLink } from 'react-router-dom';
import style from './LoginPage.module.scss';
import yaIcon from 'src/assets/images/icons/ya-id.svg';
import dotsIcon from 'src/assets/images/icons/dots-vertical.svg';
import userIcon from 'src/assets/images/icons/user-avatar-login.svg';
import adminIcon from 'src/assets/images/icons/admin-avatar-login.svg';
import backBtn from 'src/assets/images/icons/solar_arrow-up-outline.svg';

const LoginPage = () => {
  console.log('hello linter');
  return (
    <section className={style.container}>
      <div className={style.loginContainer}>
        <NavLink to="/" className={style.backBtn}>
          <img src={backBtn} alt="назад" />
        </NavLink>
        <div className={style.logoWrapper}>
          <h3 className={style.cardTitle}>Яндекс</h3>
          <img src={yaIcon} alt="лого" />
        </div>

        <p className={style.cardSubtitle}>Выберите аккаунт для входа</p>
        <p className={style.cardText}>Аккаунты, из которых вы вышли</p>

        <NavLink to="/user-accaunt/1" className={style.userBox}>
          <div className={style.userInfo}>
            <div className={style.avatarBox}>
              <img src={userIcon} />
            </div>
            <span className={style.userName}>UserName</span>
          </div>
          <div className={style.dots}>
            <img src={dotsIcon} />
          </div>
        </NavLink>
        <NavLink to="/admin/1" className={style.userBox}>
          <div className={style.userInfo}>
            <div className={style.avatarBox}>
              <img src={adminIcon} />
            </div>
            <span className={style.userName}>ADMIN</span>
          </div>
          <div>
            <img src={dotsIcon} />
          </div>
        </NavLink>

        <button className={style.btn}>Добавить аккаунт</button>
      </div>

      <div className={style.info}>
        <p className={style.infoText}>Яндекс ID — ключ от всех сервисов </p>
        <Link
          to="https://id.yandex.ru"
          target="blank"
          className={style.partnerLink}
        >
          Узнать больше
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
