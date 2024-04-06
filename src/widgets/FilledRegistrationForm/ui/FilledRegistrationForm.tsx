import style from './FilledRegistrationForm.module.scss';

const FilledRegistrationForm = () => {
  console.log('hello linter');
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Форма регистрации участника</h2>
      <p className={style.subtitle}>
        С этой формой Вы можете регистрироватьсяна любое мероприятие в один клик
      </p>
    </section>
  );
};

export default FilledRegistrationForm;
