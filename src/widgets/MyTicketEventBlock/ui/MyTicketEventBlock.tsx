import { useState, type FC } from 'react';
import { QrBtn } from 'src/entities/QrBtn';
import type { ITicket } from 'src/utils/mocks/ticketData';
import { TicketModal } from 'src/entities/Modals';

import { formatDateString } from 'src/utils/const/formatDate';

import style from './MyTicketEventBlock.module.scss';
import { useParams } from 'react-router-dom';

type TMyTicketEventBlock = {
  ticket: ITicket;
};

const MyTicketEventBlock: FC<TMyTicketEventBlock> = ({ ticket }) => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <div className={style.wrapper}>
        <div>
          <h4 className={style.title}>{ticket.name}</h4>
          <span
            className={style.text}
          >{`Начало: ${formatDateString(ticket.date)}`}</span>
        </div>
        <QrBtn onClick={() => handleOpenModal()} />
      </div>
      {ticket.ticket && openModal && (
        <TicketModal
          open={openModal}
          handleClose={handleCloseModal}
          qrImg={ticket.ticket}
          id={id}
        />
      )}
    </>
  );
};

export default MyTicketEventBlock;
