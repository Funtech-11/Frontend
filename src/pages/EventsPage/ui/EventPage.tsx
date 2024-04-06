import { Header } from 'src/widgets/Header';
import { EventAdressBlock } from 'src/widgets/EventAdressBlock';
import { AboutEvent } from 'src/widgets/AboutEvent';

import style from './EventPage.module.scss';

const EventPage = () => {
  console.log('hello linter');
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.main}>
        <div className={style.contentContainer}>EventPage</div>
        <AboutEvent />
        <EventAdressBlock />
      </div>
    </div>
  );
};

export default EventPage;
