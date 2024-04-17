import type { FC } from 'react';
import { Dialog } from '@mui/material';
import { FilledRegistrationFormBody } from 'src/widgets/FilledRegistrationForm';
import closeBtnIcon from 'src/assets/images/icons/closeButton.svg';
import { CheckboxGroup } from 'src/widgets/CheckboxGroup';
// import { personalDataText } from 'src/utils/const/text/personalDataText';
import { Button } from 'src/entities/Button';
import { RegistrationForm } from 'src/widgets/RegistrationForm';
import { personalData } from 'src/widgets/RegistrationForm/utils/utils';
import { TFormModalValues } from './types/type';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import style from './FormModal.module.scss';

const schema = yup.object().shape({
  userAgreement: yup
    .array()
    .of(yup.number())
    .defined()
    .min(1, 'Согласие на обработку персональных данных обязательно'),
});

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
  const methods = useForm<TFormModalValues>({
    resolver: yupResolver<TFormModalValues>(schema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = handleSubmit(data => {
    return data;
  });

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
          {!isRegistered ? (
            <RegistrationForm />
          ) : (
            <>
              <div className={style.contentWrapper}>
                <h2 className={style.title}>Форма регистрации участника</h2>
                <FilledRegistrationFormBody />
                <FormProvider {...methods}>
                  <form
                    className={style.formContainer}
                    onSubmit={onSubmit}
                    noValidate
                  >
                    <CheckboxGroup
                      label="Согласие на обработку персональных данных"
                      name="userAgreement"
                      options={personalData}
                      required={true}
                      errorText={`${errors.userAgreement?.message}`}
                    />
                    <Button
                      title="Зарегистрироваться"
                      type="submit"
                      extraClass={style.submitBtn}
                    />
                  </form>
                </FormProvider>
              </div>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default FilledFormModal;
