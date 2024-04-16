import { Link } from 'react-router-dom';
import { FC } from 'react';
import type { TCard } from '../types/type';
import { Chip } from 'src/entities/Chip';
import style from './Card.module.scss';

type TCardProps = {
  data: TCard;
};

const Card: FC<TCardProps> = ({ data }) => {
  return (
    <Link to={`/event/${data.eventId}`} className={style.card}>
      <div className={style.picture}>
        <img src={data.wallpaper} alt={data.name} className={style.pic} />
        <p className={style.status}>{data.status}</p>
        <div className={style.labels}>
          <Chip label={data.eventFormat} hasBorder={false} />
          {data.theme !== 'Другое' && (
            <Chip label={data.theme} hasBorder={false} />
          )}
        </div>
      </div>
      <div className={style.info}>
        <h2 className={style.name}>{data.name}</h2>
        <p className={style.company}>by Yandex</p>
        <div className={style.row}>
          <p className={style.location}>
            {data.eventType === 'Онлайн' ? 'Онлайн' : data.city}
          </p>
          <p className={style.date}>{data.dateTimeStart}</p>
        </div>
        <p className={style.description}>{data.information}</p>
      </div>
    </Link>
  );
};

export default Card;
