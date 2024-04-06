import { NavLink } from 'react-router-dom';
import style from './AdminPage.module.scss';

const AdminPage = () => {
  console.log('hello linter');
  return (
    <section className={style.container}>
      <div>Admin. Страница в разработке</div>
      <NavLink to="/">Перейти на Главную</NavLink>
    </section>
  );
};

export default AdminPage;
