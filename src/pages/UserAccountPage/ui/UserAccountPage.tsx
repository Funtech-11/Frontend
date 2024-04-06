import { Header } from 'src/widgets/Header';
import { MyTicketsBlock } from 'src/widgets/MyTicketsBlock';
import { PastEventsBlock } from 'src/widgets/PastEventsBlock';
import { FilledRegistrationForm } from 'src/widgets/FilledRegistrationForm';
import { RegistrationForm } from 'src/widgets/RegistrationForm';

import style from './UserAccountPage.module.scss';

const UserAccountPage = () => {
  console.log('hello linter');
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.main}>
        <section className={style.titleWrapper}>
          <h2 className={style.pageTitle}>Личный кабинет</h2>
        </section>
        <MyTicketsBlock />
        <FilledRegistrationForm />
        <PastEventsBlock />
        <RegistrationForm />
      </div>
    </div>
  );
};

export default UserAccountPage;
