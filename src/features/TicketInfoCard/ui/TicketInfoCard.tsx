import { useState } from 'react';

import { TicketModal } from 'src/entities/Modals';
import { NavLink } from 'react-router-dom';
import { QrBtn } from 'src/entities/QrBtn';
import qrCodeImg from 'src/assets/images/qr-code.jpg';

import style from './TicketInfoCard.module.scss';
import { Chip } from '../../../entities/Chip';

const TicketInfoCard = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log('open');
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={style.card}>
        <div>
          <h4 className={style.title}>Онлайн конференция «Войти в IT»</h4>
          <p className={style.text}>Начало: 20/03/2024 в 19:00</p>
          <div className={style.infoContainer}>
            <Chip label="Москва"></Chip>
            <Chip label="митап"></Chip>
            <Chip label="разработка"></Chip>
          </div>
        </div>
        <NavLink to="/">Смотреть онлайн</NavLink>
        <QrBtn onClick={() => handleOpenModal()} />
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

// TODO Смотреть запись или Смотреть онлайн
// TODO код на билеты или ранжевая кнопка в зависимости от онлайн или офлайн
// TODO Завершено мероприятие
// TODO чуть едет контент при открытии модалки wtf
