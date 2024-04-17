import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminPanelTable } from 'src/widgets/AdminPanelTable';
import { Button } from 'src/entities/Button';
import admin360Logo from 'src/assets/images/icons/admin360logo.svg';
import mailImg from 'src/assets/images/admin/mail.png';
import diskImg from 'src/assets/images/admin/disk.png';
import docImg from 'src/assets/images/admin/doc.png';
import calendarImg from 'src/assets/images/admin/calendar.png';
import adminImg from 'src/assets/images/admin/administration.png';
import fireIcon from 'src/assets/images/icons/admin/fire.svg';

import {
  eventsData,
  placesData,
  speakerData,
} from 'src/utils/mocks/admin/adminTablesData';
import { useAppDispatch } from 'src/app/store/hooks';
import { logout } from 'src/shared/api/user';

import style from './AdminPage.module.scss';

const tabs = ['Ивенты', 'Спикеры', 'Площадки'];

const AdminPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState<string>('Ивенты');

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/');
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Ивенты':
        return (
          <div>
            <div className={style.tableWrapper}>
              <AdminPanelTable type="event" eventsData={eventsData} />
            </div>
            {eventsData.length == 0 ? (
              <div className={style.infoNoDataContainer}>
                <h2 className={style.subtitle}>У вас еще нет мероприятий</h2>
                <div>
                  <Button title="Добавить мероприятие" />
                </div>
              </div>
            ) : null}
          </div>
        );
      case 'Спикеры':
        return (
          <div>
            <div className={style.tableWrapper}>
              <AdminPanelTable type="speaker" speakerData={speakerData} />
            </div>
            {!speakerData ? (
              <div className={style.infoNoDataContainer}>
                <h2 className={style.subtitle}>У вас еще нет спикеров</h2>
                <div>
                  <Button title="Добавить спикера" />
                </div>
              </div>
            ) : null}
          </div>
        );
      case 'Площадки':
        return (
          <div>
            <div className={style.tableWrapper}>
              <AdminPanelTable type="place" placesData={placesData} />
            </div>
            {!placesData ? (
              <div className={style.infoNoDataContainer}>
                <h2 className={style.subtitle}>
                  У вас еще нет площадок для ивентов
                </h2>
                <div>
                  <Button title="Добавить площадку" />
                </div>
              </div>
            ) : null}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.sidebarHeader}>
          <div>
            <img src={admin360Logo} alt="logo" />
          </div>
          <h1 className={style.logoText}>360</h1>
        </div>
        <ul className={style.mainNavList}>
          <li className={style.listItem}>
            <div>admin@yandex.ru</div>
          </li>
          <li className={style.listItem}>
            <div className={style.mainNavItem}>
              <div>
                <img src={fireIcon} alt="иконка" />
              </div>
              <span className={style.navText}>Мероприятия</span>
            </div>
          </li>
          <li className={style.listItem}></li>
        </ul>
        <div className={style.navLink} onClick={() => handleLogout()}>
          Выход
        </div>
      </div>

      <div className={style.layout}>
        <div className={style.header}>
          <div className={style.headerContent}>
            {[
              { img: mailImg, text: 'Почта' },
              { img: diskImg, text: 'Диск' },
              { img: docImg, text: 'Документы' },
              { img: calendarImg, text: 'Календарь' },
              { img: adminImg, text: 'Управление' },
            ].map((item, index) => (
              <div key={index} className={style.navContainer}>
                <div className={style.imgBox}>
                  <img className={style.img} src={item.img} alt={item.text} />
                </div>
                <span className={style.imgCapture}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={style.main}>
          <h2 className={style.title}>Организатор мероприятия</h2>

          <div className={style.navTabsContainer}>
            <nav>
              <ul className={style.tabList}>
                {tabs.map((tab, index) => (
                  <li key={index}>
                    <button
                      className={`${style.navItem} ${selectedOption === tab ? style.active : ''}`}
                      onClick={() => setSelectedOption(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
