import type { FC } from 'react';

import type { TMainInfoEventProps } from '../types/type';

import style from './MainInfoEvent.module.scss';

const MainInfoEvent: FC<TMainInfoEventProps> = ({ eventInfo }) => {
  console.log('hello linter');
  return (
    <section className={style.container}>
      <div className={`${style.infoItem} ${style.text} ${style.gridPosition1}`}>
        {eventInfo.themes}
      </div>
      <div className={`${style.infoItem} ${style.text} ${style.gridPosition2}`}>
        {eventInfo.type}
      </div>
      <div
        className={`${style.infoItem} ${style.longCard} ${style.gridPositionTitle}`}
      >
        <h2 className={style.title}>{eventInfo.name}</h2>
        <span className={style.textSpan}>By Yandex</span>
      </div>
      <div
        className={`${style.infoItem} ${style.longCard} ${style.gridPositionTimer}`}
      >
        <p className={style.timerTitle}>Старт мероприятия через:</p>
        <span className={style.timerText}>1 д : 22 ч : 35 мин</span>
      </div>
      <div className={`${style.infoItem} ${style.text} ${style.gridPosition3}`}>
        {eventInfo.location[0].city}
      </div>
      <div className={`${style.infoItem} ${style.text} ${style.gridPosition4}`}>
        {eventInfo.format}
      </div>
      <div className={`${style.infoItem} ${style.text} ${style.gridPosition5}`}>
        12 апреля 2024
      </div>
      <div className={`${style.infoItem} ${style.text} ${style.gridPosition6}`}>
        10:00 - 18:00
      </div>
      <div className={`${style.bannerItem} ${style.gridPositionWallpaper}`}>
        <img
          className={style.bannerImg}
          src={eventInfo.wallpaper}
          alt="баннер"
        />
      </div>
    </section>
  );
};

export default MainInfoEvent;
