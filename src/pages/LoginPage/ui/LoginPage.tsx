import { FC } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import yaIcon from 'src/assets/images/icons/ya-id.svg';
import dotsIcon from 'src/assets/images/icons/dots-vertical.svg';
import userIcon from 'src/assets/images/icons/user-avatar-login.svg';
import adminIcon from 'src/assets/images/icons/admin-avatar-login.svg';
import backBtn from 'src/assets/images/icons/solar_arrow-up-outline.svg';
import { useAppDispatch } from 'src/app/store/hooks';
import { ILoginUser } from 'src/utils/const/api';
import { getUserMe, login } from 'src/shared/api/user';

import style from './LoginPage.module.scss';

type TLoginProps = {
  users: ILoginUser[];
};

const LoginPage: FC<TLoginProps> = ({ users }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    dispatch(login({ email, password })).then(resultAction => {
      if (login.fulfilled.match(resultAction)) {
        const token = localStorage.getItem('token');
        console.log('Token from local storage:', token);
        dispatch(getUserMe());
        navigate('/');
      } else {
        navigate('/404');
      }
    });
    // if (email === 'super@user.admin') {
    //   navigate('/admin/1');
    // } else {
    //   navigate('/');
    // }
  };

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

        {users.map(user => (
          <div
            key={user.email}
            onClick={() => handleLogin(user.email, user.password)}
            className={style.userBox}
          >
            <div className={style.userInfo}>
              <div className={style.avatarBox}>
                {user.username === 'ADMIN' ? (
                  <img src={adminIcon} />
                ) : (
                  <img src={userIcon} />
                )}
              </div>
              {user.username === 'ADMIN' ? (
                <span className={style.userName}>{user.username}</span>
              ) : (
                <span
                  className={style.userName}
                >{`${user.first_name} ${user.last_name}`}</span>
              )}
            </div>
            <div className={style.dots}>
              <img src={dotsIcon} />
            </div>
          </div>
        ))}
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
