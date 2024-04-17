import type { FC } from 'react';
import { Dialog } from '@mui/material';
import { AddPlaceForm } from 'src/entities/AddPlaceForm';
import { AddSpeakerForm } from 'src/entities/AddSpeakerForm';
import closeBtnIcon from 'src/assets/images/icons/closeButton.svg';

import style from './AddItemModal.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { AddEventForm } from 'src/entities/AddEventForm';

type TAddItemModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  formType?: 'event' | 'speaker' | 'place';
};

const AddItemModal: FC<TAddItemModalProps> = ({
  open,
  onClose,
  title,
  formType,
}) => {
  const methods = useForm();

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
          <FormProvider {...methods}>
            {formType == 'event' && <AddEventForm />}
            {formType == 'place' && <AddPlaceForm />}
            {formType == 'speaker' && <AddSpeakerForm />}
          </FormProvider>
        </div>
      </Dialog>
    </div>
  );
};

export default AddItemModal;
