import { Header } from 'src/widgets/Header';
import { EventAdressBlock } from 'src/widgets/EventAdressBlock';
import { AboutEvent } from 'src/widgets/AboutEvent';
import { ProgrammList } from 'src/widgets/ProgrammList';

import style from './EventPage.module.scss';

const EventPage = () => {
  console.log('hello linter');
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.main}>
        <AboutEvent />
        <ProgrammList />
        <EventAdressBlock />
      </div>
    </div>
  );
};

export default EventPage;
