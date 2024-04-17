import { useState } from 'react';

import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { MyTicketsBlock } from 'src/widgets/MyTicketsBlock';
import { PastEventsBlock } from 'src/widgets/PastEventsBlock';
import { FilledRegistrationForm } from 'src/widgets/FilledRegistrationForm';
import { RegistrationForm } from 'src/widgets/RegistrationForm';
import { NotificationSelectBlock } from 'src/widgets/NotificationSelectBlock';

import style from './UserAccountPage.module.scss';
import { selectUser } from 'src/app/store/reducers/user/model/userSlice';
import { useAppSelector } from 'src/app/store/hooks';

const UserAccountPage = () => {
  const { user } = useAppSelector(selectUser);
  const [isMenuShown, setMenuShown] = useState(false);

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />
      <div className={style.main}>
        <section className={style.titleWrapper}>
          <h2 className={style.pageTitle}>Личный кабинет</h2>
        </section>
        {user.id === 7 && <FilledRegistrationForm />}
        <MyTicketsBlock />
        <PastEventsBlock />
        {user.id === 5 && <RegistrationForm />}
        <NotificationSelectBlock />
      </div>
    </div>
  );
};

export default UserAccountPage;
