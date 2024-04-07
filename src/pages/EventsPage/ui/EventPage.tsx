import { Header } from 'src/widgets/Header';
import { MainInfoEvent } from 'src/widgets/MainInfoEvent';
import { AboutEvent } from 'src/widgets/AboutEvent';
import { ProgrammList } from 'src/widgets/ProgrammList';
import { EventAdressBlock } from 'src/widgets/EventAdressBlock';
import { Carousel } from 'src/widgets/Carousel';

import { event } from 'src/widgets/ProgrammList/const/mockData';

import style from './EventPage.module.scss';

const EventPage = () => {
  console.log('hello linter');
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.main}>
        <MainInfoEvent eventInfo={event} />
        <AboutEvent />
        <ProgrammList />
        <Carousel />
        <EventAdressBlock />
      </div>
    </div>
  );
};

export default EventPage;
