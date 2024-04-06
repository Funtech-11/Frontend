import { NavLink } from 'react-router-dom';

import admin360Logo from 'src/assets/icons/admin360logo.svg';
import mailImg from 'src/assets/images/admin/mail.png';
import diskImg from 'src/assets/images/admin/disk.png';
import docImg from 'src/assets/images/admin/doc.png';
import calendarImg from 'src/assets/images/admin/calendar.png';
import adminImg from 'src/assets/images/admin/administration.png';

import { AdminPanelTable } from 'src/widgets/AdminPanelTable';

import style from './AdminPage.module.scss';

const AdminPage = () => {
  console.log('hello linter');
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.sidebarHeader}>
          <div>
            <img src={admin360Logo} alt="logo" />
          </div>
          <h1 className={style.logoText}>360</h1>
        </div>
        <ul>
          <li className={style.listItem}>
            <NavLink className={style.navLink} to="/">
              На главную
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={style.layout}>
        <div className={style.header}>
          <div className={style.headerContent}>
            <div className={style.navContainer}>
              <div className={style.imgBox}>
                <img className={style.img} src={mailImg} alt="почта" />
              </div>
              <span className={style.imgCapture}>Почта</span>
            </div>
            <div className={style.navContainer}>
              <div className={style.imgBox}>
                <img className={style.img} src={diskImg} alt="почта" />
              </div>
              <span className={style.imgCapture}>Диск</span>
            </div>
            <div className={style.navContainer}>
              <div className={style.imgBox}>
                <img className={style.img} src={docImg} alt="почта" />
              </div>
              <span className={style.imgCapture}>Документы</span>
            </div>
            <div className={style.navContainer}>
              <div className={style.imgBox}>
                <img className={style.img} src={calendarImg} alt="почта" />
              </div>
              <span className={style.imgCapture}>Календарь</span>
            </div>
            <div className={style.navContainer}>
              <div className={style.imgBox}>
                <img className={style.img} src={adminImg} alt="почта" />
              </div>
              <span className={style.imgCapture}>Управление</span>
            </div>
          </div>
        </div>
        <div className={style.main}>
          <div className={style.titleWrapper}>
            <h2 className={style.title}>Организатор мероприятия</h2>
            <button type="button">Добавить мероприятие</button>
          </div>
          <div className={style.tableWrapper}>
            <AdminPanelTable />
          </div>
          <div className={style.noDataMeaasgeBlock}>
            <h2 className={style.subtitle}>У вас еще нет мероприятий</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
