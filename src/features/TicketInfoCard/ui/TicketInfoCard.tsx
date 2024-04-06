import { NavLink } from 'react-router-dom';
import { QrBtn } from 'src/entities/QrBtn';

import style from './TicketInfoCard.module.scss';

const TicketInfoCard = () => {
  console.log('hello linter');
  return (
    <div className={style.card}>
      <div>
        <h4 className={style.title}>Онлайн конференция «Войти в IT»</h4>
        <p className={style.text}>Начало: 20/03/2024 в 19:00</p>
        <div className={style.infoContainer}>
          <div>Москва</div>
          <div>митап</div>
          <div>разработка</div>
        </div>
      </div>
      <NavLink to="/">Смотреть онлайн</NavLink>
      <QrBtn />
    </div>
  );
};

export default TicketInfoCard;

// TODO Смотреть запись или Смотреть онлайн
// TODO код на билеты или ранжевая кнопка в зависимости от онлайн или офлайн
// TODO Белые шильдики
// TODO Завершено мероприятие
