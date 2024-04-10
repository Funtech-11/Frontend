import { TicketInfoCard } from 'src/features/TicketInfoCard';
import { tiketMockData } from 'src/utils/mocks/ticketData';
import { Loader } from 'src/shared/Loader';

import style from './MyTicketsBlock.module.scss';

const MyTicketsBlock = () => {
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Мои билеты</h2>
      <p className={style.subtitle}>
        Здесь собраны билеты на Ваши предстоящие ивенты Покажите QR-код на входе
        на мероприятие
      </p>
      {tiketMockData ? (
        <div className={style.cardsContainer}>
          {tiketMockData.map(ticket => (
            <TicketInfoCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default MyTicketsBlock;
