import type { FC } from 'react';
import { Dialog, DialogActions } from '@mui/material';
import { ButtonLink } from 'src/entities/ButtonLink';
import closeBtnIcon from 'src/assets/images/icons/closeButton.svg';
import { Button } from 'src/entities/Button';

import style from './DelConfirmModal.module.scss';

type TDelConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

const DelConfirmModal: FC<TDelConfirmModalProps> = ({
  open,
  onClose,
  title,
  content,
}) => {
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
            <DialogActions sx={{ padding: 0 }}>
              <Button title="Удалить" />
              <Button
                title="Отказаться от удаления"
                variant="outlined"
                onClick={onClose}
              />
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DelConfirmModal;
