import style from './FilledRegistrationFormTitle.module.scss';

const FilledRegistrationFormTitle = () => {
  return (
    <>
      <h2 className={style.title}>Форма регистрации участника</h2>
      <p className={style.subtitle}>
        С этой формой Вы можете регистрироваться на любое мероприятие в один
        клик
      </p>
    </>
  );
};

export default FilledRegistrationFormTitle;
