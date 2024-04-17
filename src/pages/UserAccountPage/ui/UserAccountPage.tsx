import { useState } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectUser } from 'src/app/store/reducers/user/model/userSlice';

import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { MyTicketsBlock } from 'src/widgets/MyTicketsBlock';
import { PastEventsBlock } from 'src/widgets/PastEventsBlock';
import { FilledRegistrationForm } from 'src/widgets/FilledRegistrationForm';
import { RegistrationForm } from 'src/widgets/RegistrationForm';
import { NotificationSelectBlock } from 'src/widgets/NotificationSelectBlock';

import style from './UserAccountPage.module.scss';

const UserAccountPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);

  const [isMenuShown, setMenuShown] = useState(false);

  console.log('USER LK', user);

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />
      <div className={style.main}>
        <section className={style.titleWrapper}>
          <h2 className={style.pageTitle}>Личный кабинет</h2>
        </section>
        <MyTicketsBlock />
        <FilledRegistrationForm />
        <PastEventsBlock />
        <RegistrationForm />
        <NotificationSelectBlock />
      </div>
    </div>
  );
};

export default UserAccountPage;
