import style from './RegistrationForm.module.scss';

const RegistrationForm = () => {
  console.log('hello linter');
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Форма регистрации участника</h2>
      <p className={style.subtitle}>
        Заполните форму один раз для быстрой регистрации на любые мероприятия в
        один клик
      </p>
      <div className={style.cardsContainer}>Form</div>
    </section>
  );
};

export default RegistrationForm;
