import type { FC } from 'react';
import { Dialog, DialogActions } from '@mui/material';
import closeBtnIcon from 'src/assets/icons/closeButton.svg';

import style from './TicketModal.module.scss';

type TTicketModalProps = {
  open: boolean;
  onClose: () => void;
  qrImg: string;
};

const TicketModal: FC<TTicketModalProps> = ({ open, onClose, qrImg }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '20px',
          },
        }}
      >
        <div className={style.modalContainer}>
          <button
            aria-label="закрыть"
            type="button"
            className={style.closeBtn}
            onClick={onClose}
          >
            <img src={closeBtnIcon} alt="закрыть" />
          </button>
          <h2 className={style.title}>Покажите QR-код на входе</h2>
          <span className={style.text}>
            Администратор на входе попросит Вас показать ему этот QR-код для
            участия на мероприятии
          </span>
          <div className={style.ticketBox}>
            <img className={style.img} src={qrImg} alt="билет" />
          </div>
          <h2 className={style.title}>Готово?</h2>
          <span className={`${style.text} ${style.nomargin}`}>
            Желаем получить удовольствие от нашего мероприятия!
          </span>
          <span className={style.text}>
            Вы можете посмотреть расписание и список выступлений в карточке
            мероприятия
          </span>
          <div className={style.btnWrapper}>
            <DialogActions>
              <button>К мероприятию</button>
              <button>В личный кабинет</button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TicketModal;
