import type { FC } from 'react';
import { Dialog, DialogActions } from '@mui/material';
import { FilledRegistrationForm } from 'src/widgets/FilledRegistrationForm';
import closeBtnIcon from 'src/assets/icons/closeButton.svg';

import style from './FilledFormModal.module.scss';

type TFilledFormModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

const FilledFormModal: FC<TFilledFormModalProps> = ({
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
          <h2 className={style.title}>Регистрация на мероприятие</h2>
          <span className={style.text}>
            Заполните форму один раз для быстрой регистрации на любые
            мероприятия в один клик
          </span>
          <FilledRegistrationForm />
          <span className={style.text}>
            *Согласие на обработку персональных данных
          </span>
          <div>
            <span>
              Я даю свое согласие на передачу в ООО «Яндекс» анкеты, содержащей
              мои персональные, и согласен с тем, что они будут храниться в ООО
              «Яндекс» в течение 10 лет и будут использованы исключительно для
              целей приглашения меня к участию в мероприятиях группы компаний
              «Яндекс» в соответствии с Федеральным законом «О персональных
              данных».
            </span>
          </div>
          <div className={style.btnWrapper}>
            <DialogActions>
              <button>Зарегистрироваться</button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default FilledFormModal;
