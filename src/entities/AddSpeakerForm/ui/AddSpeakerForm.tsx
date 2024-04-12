import { FormEvent } from 'react';
import { InputTypeText } from 'src/entities/Input/InputTypeText';

import { Button } from 'src/entities/Button';
import style from './AddSpeakerForm.module.scss';

const AddSpeakerForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>О спикере</h3>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.row}>
          <InputTypeText
            label="Фамилия и Имя"
            type="text"
            placeholder="Иван Иванов"
            required
          />
          <InputTypeText
            label="Должность"
            type="text"
            placeholder="Бэкенд разработчик"
            required
          />
        </div>
        <Button
          title="Добавить спикера"
          type="submit"
          extraClass={style.submit}
        />
      </form>
    </div>
  );
};

export default AddSpeakerForm;
