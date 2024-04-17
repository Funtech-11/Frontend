import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from 'src/app/store/hooks';
import { selectEvents } from 'src/app/store/reducers/events/model/eventsSlice';

import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { MainInfoEvent } from 'src/widgets/MainInfoEvent';
import { AboutEvent } from 'src/widgets/AboutEvent';
import { ProgrammList } from 'src/widgets/ProgrammList';
import { EventAdressBlock } from 'src/widgets/EventAdressBlock';
import { Carousel } from 'src/widgets/Carousel';
import { MyTicketEventBlock } from 'src/widgets/MyTicketEventBlock';
import { Loader } from 'src/shared/Loader';

import style from './EventPage.module.scss';

const EventPage = () => {
  const { id } = useParams();

  const { events, isLoading } = useAppSelector(selectEvents);
  const event = events.find(event => event.eventId === parseInt(String(id)));

  const [isMenuShown, setMenuShown] = useState(false);

  return isLoading ? (
    <Loader />
  ) : (
    event && (
      <div className={style.layout}>
        <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
        <Menu isShown={isMenuShown} />
        <div className={style.main}>
          <MainInfoEvent eventInfo={event} />
          <AboutEvent type="long" text={event.information} />
          {/* <div className={style.twoColContainer}>
            <MyTicketEventBlock ticket={currentTiketMockData} />
            <AboutEvent type="short" text={event.information} />
          </div> */}
          <ProgrammList eventInfo={event} />
          {event.status === 'FINISHED' && <Carousel />}
          <EventAdressBlock eventInfo={event} />
        </div>
      </div>
    )
  );
};

export default EventPage;
