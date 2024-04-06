import avatarIcon from 'src/assets/images/avatars/4b20ef67ab74659b2552d4e86c81968d.jpeg';
import style from './FilledRegistrationForm.module.scss';

const FilledRegistrationForm = () => {
  console.log('hello linter');
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Форма регистрации участника</h2>
      <p className={style.subtitle}>
        С этой формой Вы можете регистрироватьсяна любое мероприятие в один клик
      </p>
      <div className={style.card}>
        <div className={style.containerr}>
          <div className={style.userInfoContainer}>
            <div className={style.avatarWrapper}>
              <img className={style.avatar} src={avatarIcon} alt="аватар" />
            </div>
            <div className={style.infoWrapper}>
              <p className={style.name}>Александр Васильев</p>
              <p className={style.job}>Тимлид в ЗАО «КРОК»</p>
            </div>
          </div>
          <div className={style.infoGrid}>
            <div className={style.textBlock}>
              <span className={style.text}>Телефон:</span>
              <span className={style.text}>+7 (985) 123 - 77 - 77</span>
            </div>
            <div className={style.textBlock}>
              <span className={style.text}>Почта:</span>
              <span className={style.text}>Alex_Vasiliev@yandex.ru</span>
            </div>
            <div className={style.textBlock}>
              <span className={style.text}>Направление:</span>
              <span className={style.text}>Backend</span>
            </div>
            <div className={style.textBlock}>
              <span className={style.text}>Стек:</span>
              <span className={style.text}>Ruby</span>
            </div>
          </div>
        </div>
        <button type="button">Редактировать</button>
      </div>
    </section>
  );
};

export default FilledRegistrationForm;

// TODO кнопка редактировать общая оранжевая
