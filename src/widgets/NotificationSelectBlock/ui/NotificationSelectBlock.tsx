import { ToggleButton } from 'src/shared/ToggleButton';
import style from './NotificationSelectBlock.module.scss';
import { useState } from 'react';

const NotificationSelectBlock = () => {
  const [notificationOptions, setNotificationOptions] = useState([
    { id: 'email', label: 'По электронной почте', checked: false },
    { id: 'sms', label: 'По СМС', checked: false },
    { id: 'webPush', label: 'Пуш в веб-приложении', checked: false },
    {
      id: 'webPushWithApp',
      label: 'Пуш в веб-приложении с приложением',
      checked: false,
    },
  ]);

  const handleCheckboxChange = (id: string) => {
    setNotificationOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
  };

  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Настройка уведомлений</h2>
      <p className={style.subtitle}>
        Получайте подтверждение регистрации, билеты на мероприятие и уведомления
        об их начале удобным для Вас способом
      </p>
      <div className={style.cardsContainer}>
        {notificationOptions.map(option => (
          <div className={style.container} key={option.id}>
            <span className={style.labelText}>{option.label}</span>
            <ToggleButton
              id={option.id}
              checked={option.checked}
              onChange={() => handleCheckboxChange(option.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default NotificationSelectBlock;
