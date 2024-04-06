import { NavLink } from 'react-router-dom';
import burgerIcon from 'src/assets/icons/burger.svg';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <NavLink to="/" className={style.logoLink}>
      <h1 className={style.title}>Яндекс. Ивенты</h1>
    </NavLink>
    <div className={style.loginContainer}>
      <NavLink className={style.loginLink} to="/login">
        Войти
      </NavLink>
      <button className={style.burgerBtn} type="button">
        <img src={burgerIcon} alt="меню" />
      </button>
    </div>
  </header>
);

export default Header;
