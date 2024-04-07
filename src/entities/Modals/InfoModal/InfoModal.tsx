import type { FC } from 'react';
import { Dialog, DialogActions } from '@mui/material';
import closeBtnIcon from 'src/assets/icons/closeButton.svg';

import style from './InfoModal.module.scss';

type TInfoModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

const InfoModal: FC<TInfoModalProps> = ({ open, onClose, title, content }) => {
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
          <h2 className={style.title}>{title}</h2>
          <span className={style.text}>{content}</span>
          <div className={style.btnWrapper}>
            <DialogActions>
              <button>На главную</button>
              <button>В личный кабинет</button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default InfoModal;
