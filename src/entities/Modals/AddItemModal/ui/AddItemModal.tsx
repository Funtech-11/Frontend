import type { FC } from 'react';
import { Dialog } from '@mui/material';
import { AddPlaceForm } from 'src/entities/AddPlaceForm';
import { AddSpeakerForm } from 'src/entities/AddSpeakerForm';
import closeBtnIcon from 'src/assets/images/icons/closeButton.svg';

import style from './AddItemModal.module.scss';

type TAddItemModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  btnText: string;
  formType?: 'place' | 'speaker';
};

const AddItemModal: FC<TAddItemModalProps> = ({
  open,
  onClose,
  title,
  btnText,
  formType,
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
          '& .MuiDialog-paper': {
            maxWidth: '900px',
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
          {formType == 'place' && <AddPlaceForm />}
          {formType == 'speaker' && <AddSpeakerForm />}
          {/* <div className={style.btnWrapper}>
            <DialogActions sx={{ padding: 0 }}>
              <Button title={btnText} type="submit" />
            </DialogActions>
          </div> */}
        </div>
      </Dialog>
    </div>
  );
};

export default AddItemModal;
