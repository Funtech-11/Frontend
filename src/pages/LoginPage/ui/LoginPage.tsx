import { NavLink } from 'react-router-dom';
import style from './LoginPage.module.scss';

const LoginPage = () => {
  console.log('hello linter');
  return (
    <section className={style.container}>
      <div>Login. Страница в разработке</div>
      <NavLink to="/">Перейти на Главную</NavLink>
      <NavLink to="/user-accaunt/1">Перейти в ЛК</NavLink>
      <NavLink to="/admin/1">Перейти в админку</NavLink>
      <NavLink to="/event/1">Перейти в ивенты</NavLink>
    </section>
  );
};

export default LoginPage;
