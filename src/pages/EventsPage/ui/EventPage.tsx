import { useState } from 'react';
import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { MainInfoEvent } from 'src/widgets/MainInfoEvent';
import { AboutEvent } from 'src/widgets/AboutEvent';
import { ProgrammList } from 'src/widgets/ProgrammList';
import { EventAdressBlock } from 'src/widgets/EventAdressBlock';
import { Carousel } from 'src/widgets/Carousel';
import { MyTicketEventBlock } from 'src/widgets/MyTicketEventBlock';

import { event } from 'src/utils/mocks/eventsMockData';
import { currentTiketMockData } from 'src/utils/mocks/ticketData';

import style from './EventPage.module.scss';

const EventPage = () => {
  const [isMenuShown, setMenuShown] = useState(false);

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />
      <div className={style.main}>
        <MainInfoEvent eventInfo={event} />
        <AboutEvent type="long" />
        <div className={style.twoColContainer}>
          <MyTicketEventBlock ticket={currentTiketMockData} />
          <AboutEvent type="short" />
        </div>
        <ProgrammList />
        <Carousel />
        <EventAdressBlock />
      </div>
    </div>
  );
};

export default EventPage;
