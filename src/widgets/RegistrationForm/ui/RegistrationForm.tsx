import { FormEvent } from 'react';
import { InputTypeText } from 'src/entities/Input/InputTypeText';
import { InputTypeSelect } from 'src/entities/Input/InputTypeSelect';
import { CheckboxBlock } from 'src/widgets/CheckboxBlock';
import { Button } from 'src/entities/Button';
import style from './RegistrationForm.module.scss';

const RegistrationForm = () => {
  const themes = ['Backend', 'Frontend', 'Mobile', 'QA', 'ML', 'Другое'];
  const personalDataText = [
    'Я даю свое согласие на передачу в ООО «Яндекс» анкеты, содержащей мои персональные, и согласен с тем, что они будут храниться в ООО «Яндекс» в течение 10 лет и будут использованы исключительно для целей приглашения меня к участию в мероприятиях группы компаний «Яндекс» в соответствии с Федеральным законом «О персональных данных».',
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Форма регистрации участника</h2>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <p className={style.legend}>
          Заполните форму один раз для быстрой регистрации на любые мероприятия
          в один клик
        </p>
        <div className={style.row}>
          <InputTypeText
            label="Имя"
            type="text"
            placeholder="Иван"
            errorText="Введите своё полное имя"
            required
          />
          <InputTypeText
            label="Фамилия"
            type="text"
            placeholder="Иванович"
            errorText="Введите свою фамилию"
            required
          />
        </div>
        <div className={style.row}>
          <InputTypeText
            label="Телефон"
            type="tel"
            placeholder="+7 (123) 456-78-90"
            errorText="Введите свой номер телефона"
            required
          />
          <InputTypeText
            label="Email"
            type="email"
            placeholder="IvanVoronin@yandex.ru"
            errorText="Введите почту"
            required
          />
        </div>
        <div className={style.row}>
          <InputTypeText
            label="Место работы / учёбы"
            type="text"
            placeholder="ООО «Компания», МГТУ им. Н.Э. Баумана..."
            errorText="Укажите название компании или учебного заведения"
            required
          />
        </div>
        <div className={style.row}>
          <InputTypeText
            label="Должность"
            type="text"
            placeholder="Разработчик, студент..."
            errorText="Укажите свою должность / учебную специальность"
            required
          />
          <InputTypeSelect
            label="Опыт работы"
            errorText="Выберите свой опыт работы без учета обучения"
            required
          >
            {['Нет опыта', '1 год', '2 года', 'Другое'].map((item, index) => (
              <option key={`option${index}`}>{item}</option>
            ))}
          </InputTypeSelect>
        </div>
        <CheckboxBlock label="Ваше направление" data={themes} required={true} />
        <CheckboxBlock
          label="Согласие на обработку персональных данных"
          data={personalDataText}
          required={true}
          errorText="Согласие на обработку персональных данных обязательно"
        />
        <Button title="Сохранить" type="submit" extraClass={style.submit} />
      </form>
    </section>
  );
};

export default RegistrationForm;
