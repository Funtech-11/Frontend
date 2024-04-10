import { useState } from 'react';
import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { MainInfoEvent } from 'src/widgets/MainInfoEvent';
import { AboutEvent } from 'src/widgets/AboutEvent';
import { ProgrammList } from 'src/widgets/ProgrammList';
import { EventAdressBlock } from 'src/widgets/EventAdressBlock';
import { Carousel } from 'src/widgets/Carousel';

import { event } from 'src/widgets/ProgrammList/const/mockData';

import style from './EventPage.module.scss';

const EventPage = () => {
  const [isMenuShown, setMenuShown] = useState(false);

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />
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
