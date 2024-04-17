import { Button } from 'src/entities/Button';
import avatarIcon from 'src/assets/images/avatars/4b20ef67ab74659b2552d4e86c81968d.jpeg';

import style from './FilledRegistrationFormBody.module.scss';

const FilledRegistrationFormBody = () => {
  return (
    <div className={style.card}>
      <div className={style.containerr}>
        <div className={style.userInfoContainer}>
          <div className={style.avatarWrapper}>
            <img className={style.avatar} src={avatarIcon} alt="аватар" />
          </div>
          <div className={style.infoWrapper}>
            <p className={style.name}>Александр Кочевой</p>
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
      <Button title="Редактировать" variant="outlined" hasIcon={true} />
    </div>
  );
};

export default FilledRegistrationFormBody;
