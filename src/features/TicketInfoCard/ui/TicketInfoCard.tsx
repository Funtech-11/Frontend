import { FC, useState } from 'react';
import { TicketModal } from 'src/entities/Modals';
import { QrBtn } from 'src/entities/QrBtn';
import { Chip } from 'src/entities/Chip';
import { ButtonLink } from 'src/entities/ButtonLink';
import { ITicket } from 'src/utils/mocks/ticketData';

import qrCodeImg from 'src/assets/images/qr-code.jpg';

import style from './TicketInfoCard.module.scss';

interface ITicketInfoCardProps {
  ticket: ITicket;
}

const TicketInfoCard: FC<ITicketInfoCardProps> = ({ ticket }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const formatDateString = (dateStr: string) => {
    const [year, month, day, hours, minutes] = dateStr.split(/[-T:]/);
    return `${day}/${month}/${year} в ${hours}:${minutes}`;
  };

  const formatDateStringNoTime = (dateStr: string) => {
    const [year, month, day] = dateStr.split(/[-T:]/);
    return `${day}/${month}/${year} `;
  };

  const statusCompleted = ticket.status === 'Завершено';
  const dateLabel = statusCompleted ? 'Завершено' : 'Начало';
  const dateFormatted = statusCompleted
    ? formatDateStringNoTime(ticket.date)
    : formatDateString(ticket.date);
  const watchLabel = statusCompleted ? 'Смотреть запись' : 'Смотреть онлайн';
  const buttonAction = statusCompleted ? (
    <ButtonLink title={watchLabel} path="/video/1" hasIcon />
  ) : ticket.ticket ? (
    <QrBtn onClick={() => handleOpenModal()} />
  ) : (
    <ButtonLink title="Смотреть онлайн" path="/video/1" hasIcon />
  );

  return (
    <>
      <div className={style.card}>
        <div>
          <h4 className={style.title}>{ticket.name}</h4>
          <p className={style.text}>{`${dateLabel}: ${dateFormatted}`}</p>
          <div className={style.infoContainer}>
            <Chip label={ticket.type === 'Онлайн' ? 'Онлайн' : ticket.city} />
            <Chip label={ticket.format} />
            <Chip label={ticket.theme} />
          </div>
        </div>
        {buttonAction}
      </div>
      {openModal && (
        <TicketModal
          open={openModal}
          onClose={handleCloseModal}
          qrImg={qrCodeImg}
        />
      )}
    </>
  );
};

export default TicketInfoCard;

// TODO чуть едет контент при открытии модалки wtf
