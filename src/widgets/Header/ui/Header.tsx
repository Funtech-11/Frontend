import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import burgerIcon from 'src/assets/icons/burger.svg';
import style from './Header.module.scss';

type THeaderProps = {
  isMenuShown: boolean;
  setMenuShown: React.Dispatch<boolean>;
};

const Header: FC<THeaderProps> = ({ isMenuShown, setMenuShown }) => {
  const handleClick = () => {
    setMenuShown(!isMenuShown);
  };

  return (
    <header className={style.header}>
      <NavLink to="/" className={style.logoLink}>
        <h1 className={style.title}>Яндекс.Ивенты</h1>
      </NavLink>
      <div className={style.loginContainer}>
        <NavLink className={style.loginLink} to="/login">
          Войти
        </NavLink>
        <button className={style.burgerBtn} type="button" onClick={handleClick}>
          <img src={burgerIcon} alt="Меню" />
        </button>
      </div>
    </header>
  );
};

export default Header;
