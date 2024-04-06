import { NavLink } from 'react-router-dom';
import style from './UserAccountPage.module.scss';

const UserAccountPage = () => {
  console.log('hello linter');
  return (
    <section className={style.container}>
      <div>UserAccountPage. Страница в разработке</div>
      <NavLink to="/">Перейти на Главную</NavLink>
    </section>
  );
};

export default UserAccountPage;
