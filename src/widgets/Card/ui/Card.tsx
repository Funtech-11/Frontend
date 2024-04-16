import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Chip } from 'src/entities/Chip';

import { IEvent } from 'src/shared/api/events/dtos';
import { formatDateString } from 'src/utils/const/formatDate';
import { eventFormatDict, eventStatus, themeDict } from 'src/utils/const/lib';
import cardImg1 from 'src/assets/images/mock/1.png';

import style from './Card.module.scss';

type TCardProps = {
  data: IEvent;
};

const Card: FC<TCardProps> = ({ data }) => {
  return (
    <Link to={`/event/${data.eventId}`} className={style.card}>
      <div className={style.picture}>
        {data.wallpaper ? (
          <img src={data.wallpaper} alt={data.name} className={style.pic} />
        ) : (
          <img src={cardImg1} alt="Default" className={style.pic} />
        )}
        {data.status ? (
          <div className={style.statusBox}>
            <div
              className={
                data.status === 'REGISTRATION_OPEN'
                  ? style.statusDotOpen
                  : data.status === 'REGISTRATION_CLOSE'
                    ? style.statusDotClosed
                    : data.status === 'FINISHED'
                      ? style.statusDotFinished
                      : ''
              }
            ></div>
            <p className={style.statusText}>{eventStatus[data.status]}</p>
          </div>
        ) : null}
        <div className={style.labels}>
          {data.eventFormat ? (
            <Chip label={eventFormatDict[data.eventFormat]} hasBorder={false} />
          ) : (
            <Chip label="Конференция" hasBorder={false} />
          )}
          {data.theme.name ? (
            <Chip label={themeDict[data.theme.name]} hasBorder={false} />
          ) : (
            <Chip label="Другое" hasBorder={false} />
          )}
        </div>
      </div>
      <div className={style.info}>
        <h2 className={style.name}>{data.name}</h2>
        <p className={style.company}>by Yandex</p>
        <div className={style.row}>
          <p className={style.location}>
            {data.eventType === 'ONLINE'
              ? 'OFLINE'
              : data.location
                ? data.location.city || 'Москва'
                : 'Москва'}
          </p>
          <p className={style.date}>{formatDateString(data.dateTimeStart)}</p>
        </div>
        <p className={style.description}>{data.information}</p>
      </div>
    </Link>
  );
};

export default Card;
