import type { FC } from 'react';
import { Dialog } from '@mui/material';
import { FilledRegistrationFormBody } from 'src/widgets/FilledRegistrationForm';
import closeBtnIcon from 'src/assets/images/icons/closeButton.svg';
import { CheckboxBlock } from 'src/widgets/CheckboxBlock';
import { personalDataText } from 'src/utils/const/text/personalDataText';
import { Button } from 'src/entities/Button';

import style from './FormModal.module.scss';

type TFilledFormModalProps = {
  open: boolean;
  handleClose: () => void;
  isRegistered: boolean;
};

const FilledFormModal: FC<TFilledFormModalProps> = ({
  open,
  handleClose,
  isRegistered,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '20px',
          },
          '& .MuiDialog-paper': {
            maxWidth: '870px',
          },
        }}
      >
        <div className={style.modalContainer}>
          <button
            aria-label="закрыть"
            type="button"
            className={style.closeBtn}
            onClick={handleClose}
          >
            <img src={closeBtnIcon} alt="закрыть" />
          </button>

          <h2 className={style.title}>Форма регистрации участника</h2>
          {!isRegistered && (
            <span className={style.text}>
              Заполните форму один раз для быстрой регистрации на любые
              мероприятия в один клик
            </span>
          )}
          <FilledRegistrationFormBody />
          <CheckboxBlock
            label="Согласие на обработку персональных данных"
            data={personalDataText}
            required={true}
            errorText="Согласие на обработку персональных данных обязательно"
          />
          <div className={style.btnWrapper}>
            <Button title="Зарегистрироваться" disabled />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default FilledFormModal;
