import { TicketInfoCard } from 'src/features/TicketInfoCard';
import { tiketFinishedMockData } from 'src/utils/mocks/ticketData';
import { Loader } from 'src/shared/Loader';

import style from './PastEventsBlock.module.scss';

const PastEventsBlock = () => {
  console.log('hello linter');
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Мои прошедшие мероприятия</h2>
      {tiketFinishedMockData ? (
        <div className={style.cardsContainer}>
          {tiketFinishedMockData.map(ticket => (
            <TicketInfoCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default PastEventsBlock;
