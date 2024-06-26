import { FC, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import yaIcon from 'src/assets/images/icons/ya-id.svg';
import dotsIcon from 'src/assets/images/icons/dots-vertical.svg';
import adminIcon from 'src/assets/images/icons/admin-avatar-login.svg';
import backBtn from 'src/assets/images/icons/solar_arrow-up-outline.svg';

import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { ILoginUser } from 'src/utils/const/api';
import { getUserMe, login } from 'src/shared/api/user';
import { selectUser } from 'src/app/store/reducers/user/model/userSlice';

import style from './LoginPage.module.scss';

type TLoginProps = {
  users: ILoginUser[];
};

const LoginPage: FC<TLoginProps> = ({ users }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(selectUser);

  // eslint-disable-next-line
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoadingStates(prevLoadingStates => ({
        ...prevLoadingStates,
        [email]: true,
      }));

      const loginAction = login({ email, password });
      const loginResult = await dispatch(loginAction);

      if (login.rejected.match(loginResult)) {
        navigate('/error500');
      } else if (login.fulfilled.match(loginResult)) {
        const userDataResult = await dispatch(getUserMe());

        if (getUserMe.fulfilled.match(userDataResult)) {
          // Navigation occurs only after receiving user data
        } else {
          navigate('/error500');
        }
      } else {
        navigate('/error500');
      }
    } catch (error) {
      navigate('/error500');
    } finally {
      setLoadingStates(prevLoadingStates => ({
        ...prevLoadingStates,
        [email]: false,
      }));
    }
  };

  useEffect(() => {
    if (user.id) {
      if (user.email === 'super@user.admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
    // eslint-disable-next-line
  }, [user]);

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
                  <div className={style.userAvatarBox}>
                    <img
                      src={user.avatar}
                      className={style.userAvatar}
                      alt="avatar"
                    />
                  </div>
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
