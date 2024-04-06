import { TicketInfoCard } from 'src/features/TicketInfoCard';

import style from './PastEventsBlock.module.scss';

const PastEventsBlock = () => {
  console.log('hello linter');
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Мои прошедшие мероприятия</h2>
      <div className={style.cardsContainer}>
        <TicketInfoCard />
        <TicketInfoCard />
      </div>
    </section>
  );
};

export default PastEventsBlock;
