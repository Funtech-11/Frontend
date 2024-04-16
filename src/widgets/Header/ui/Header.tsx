import { FC, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import burgerIcon from 'src/assets/images/icons/burger.svg';
import userIcon from 'src/assets/images/icons/user-avatar-login.svg';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectUser } from 'src/app/store/reducers/user/model/userSlice';
import { logout } from 'src/shared/api/user';

import style from './Header.module.scss';

type THeaderProps = {
  isMenuShown: boolean;
  setMenuShown: React.Dispatch<boolean>;
};

const Header: FC<THeaderProps> = ({ isMenuShown, setMenuShown }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleClick = () => {
    setMenuShown(!isMenuShown);
  };

  const { user, token } = useAppSelector(selectUser);
  console.log('USER HEADER', user);
  console.log('isLoggedIn', isLoggedIn);

  const handleLogout = async () => {
    console.log('logout click');
    await dispatch(logout());
    const token = localStorage.getItem('token');
    console.log('после логаута', token);
    navigate('/');
  };

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  return (
    <header className={style.header}>
      <NavLink to="/" className={style.logoLink}>
        <h1 className={style.title}>Яндекс.Ивенты</h1>
      </NavLink>
      <div className={style.loginContainer}>
        {isLoggedIn === false ? (
          <NavLink className={style.loginLink} to="/login">
            Войти
          </NavLink>
        ) : (
          <div className={style.userInfoBox}>
            <img src={userIcon} />
            <NavLink
              to={`/user-accaunt/${user.id}`}
              className={style.loginLink}
            >{`${user.firstName} ${user.lastName}`}</NavLink>
            <div className={style.loginLink} onClick={() => handleLogout()}>
              Выйти
            </div>
          </div>
        )}
        <button className={style.burgerBtn} type="button" onClick={handleClick}>
          <img src={burgerIcon} alt="Меню" />
        </button>
      </div>
    </header>
  );
};

export default Header;
