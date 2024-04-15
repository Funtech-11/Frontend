import { FormEvent } from 'react';
import { InputTypeText } from 'src/entities/Input/InputTypeText';

import { Button } from 'src/entities/Button';
import style from './AddPlaceForm.module.scss';

const AddPlaceForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>О площадке</h3>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <InputTypeText
          name="builing"
          label="Краткое название площадки"
          type="text"
          placeholder="БЦ «Галерея», «Завод Флакон», иное..."
          required
        />
        <InputTypeText
          name="address"
          label="Адрес"
          type="text"
          placeholder="Ул. Костюшкина, д. 11"
          required
        />
        <div className={style.row}>
          <InputTypeText
            name="city"
            label="Город"
            type="text"
            placeholder="Москва"
            required
          />
          <InputTypeText
            name="metroStation"
            label="Метро"
            type="text"
            placeholder="Метро"
          />
        </div>
        <Button
          title="Добавить площадку"
          type="submit"
          extraClass={style.submit}
        />
      </form>
    </div>
  );
};

export default AddPlaceForm;
