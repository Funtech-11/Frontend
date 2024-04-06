import { TicketInfoCard } from 'src/features/TicketInfoCard';

import style from './MyTicketsBlock.module.scss';

const MyTicketsBlock = () => {
  console.log('hello linter');
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Мои билеты</h2>
      <p className={style.subtitle}>
        Здесь собраны билеты на Ваши предстоящие ивенты Покажите QR-код на входе
        на мероприятие
      </p>
      <div className={style.cardsContainer}>
        <TicketInfoCard />
        <TicketInfoCard />
      </div>
    </section>
  );
};

export default MyTicketsBlock;
