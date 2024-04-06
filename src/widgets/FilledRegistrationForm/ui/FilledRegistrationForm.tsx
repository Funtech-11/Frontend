import style from './FilledRegistrationForm.module.scss';

const FilledRegistrationForm = () => {
  console.log('hello linter');
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.pageTitle}>Форма регистрации участника</h2>
    </section>
  );
};

export default FilledRegistrationForm;
