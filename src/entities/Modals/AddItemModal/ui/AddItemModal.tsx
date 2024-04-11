import type { FC } from 'react';
import { Dialog, DialogActions } from '@mui/material';

import { Button } from 'src/entities/Button';

import closeBtnIcon from 'src/assets/icons/closeButton.svg';

import style from './AddItemModal.module.scss';

type TAddItemModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

const AddItemModal: FC<TAddItemModalProps> = ({ open, onClose, title }) => {
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

          <div className={style.btnWrapper}>
            <DialogActions>
              <Button title="Добавить спикера" />
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddItemModal;
