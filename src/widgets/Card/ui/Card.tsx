import { Link } from 'react-router-dom';
import { FC } from 'react';
import type { TCard } from '../types/type';
import { Chip } from 'src/entities/Chip';
import style from './Card.module.scss';

type TCardProps = {
  event: TCard;
};

const Card: FC<TCardProps> = ({ event }) => {
  return (
    <Link to={`/event/${event.id}`} className={style.card}>
      <div className={style.picture}>
        <img src={event.image} alt={event.name} className={style.pic} />
        <p className={style.status}>{event.status}</p>
        <div className={style.labels}>
          <Chip label={event.format} hasBorder={false} />
          {event.theme !== 'Другое' && (
            <Chip label={event.theme} hasBorder={false} />
          )}
        </div>
      </div>
      <div className={style.info}>
        <h2 className={style.name}>{event.name}</h2>
        <p className={style.company}>by Yandex</p>
        <div className={style.row}>
          <p className={style.location}>
            {event.type === 'Онлайн' ? 'Онлайн' : event.city}
          </p>
          <p className={style.date}>{event.date}</p>
        </div>
        <p className={style.description}>{event.information}</p>
      </div>
    </Link>
  );
};

export default Card;
