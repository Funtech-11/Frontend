// import { ToggleButton } from 'src/shared/ToggleButton';
// import style from './NotificationSelectBlock.module.scss';
// import { useState } from 'react';

// const NotificationSelectBlock = () => {
//   const [notificationOptions, setNotificationOptions] = useState([
//     { id: 'email', label: 'По электронной почте', checked: false },
//     { id: 'sms', label: 'По СМС', checked: false },
//     { id: 'webPush', label: 'Пуш в веб-приложении', checked: false },
//     {
//       id: 'tg',
//       label: 'В телеграмм-боте',
//       checked: false,
//     },
//   ]);

//   const [expandedTextId, setExpandedTextId] = useState('');

//   const handleCheckboxChange = (id: string) => {
//     setNotificationOptions(prevOptions =>
//       prevOptions.map(option =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     if (expandedTextId === id) {
//       setExpandedTextId('');
//     } else {
//       setExpandedTextId(id);
//     }
//   };

//   const getText = (id: string) => {
//     switch (id) {
//       case 'email':
//         return 'Вы будете получать уведомления о Ваших мероприятиях на адрес электронной почты, указанный при регистрации.';
//       case 'sms':
//         return 'Вы будете получать уведомления о Ваших мероприятиях через СМС на номер телефона, указанный при регистрации.';
//       case 'webPush':
//         return 'Вы будете получать уведомления о Ваших мероприятиях в интернет-браузере.';
//       case 'tg':
//         return 'Перейдите в телеграмм-бот для получения уведомлений о Ваших мероприятиях: @yandex_ivents_bot.';
//       default:
//         return '';
//     }
//   };

//   return (
//     <section className={style.sectionWrapper}>
//       <h2 className={style.title}>Настройка уведомлений</h2>
//       <p className={style.subtitle}>
//         Получайте подтверждение регистрации, билеты на мероприятие и уведомления
//         об их начале удобным для Вас способом
//       </p>
//       <div className={style.cardsContainer}>
//         {notificationOptions.map(option => (
//           <>
//             <div className={style.container} key={option.id}>
//               <span className={style.labelText}>{option.label}</span>
//               <ToggleButton
//                 id={option.id}
//                 checked={option.checked}
//                 onChange={() => handleCheckboxChange(option.id)}
//               />
//             </div>
//             {expandedTextId === option.id && (
//               <p className={style.expandedText}>{getText(option.id)}</p>
//             )}
//           </>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NotificationSelectBlock;

import { ToggleButton } from 'src/shared/ToggleButton';
import style from './NotificationSelectBlock.module.scss';
import { useState } from 'react';

interface NotificationOptions {
  email: boolean;
  sms: boolean;
  webPush: boolean;
  tg: boolean;
}

const NotificationSelectBlock = () => {
  const initialOptionsState: NotificationOptions = {
    email: false,
    sms: false,
    webPush: false,
    tg: false,
  };

  const [notificationOptions, setNotificationOptions] =
    useState<NotificationOptions>(initialOptionsState);

  const handleCheckboxChange = (id: keyof NotificationOptions) => {
    setNotificationOptions(prevOptions => ({
      ...prevOptions,
      [id]: !prevOptions[id],
    }));
  };

  const getText = (id: keyof NotificationOptions) => {
    switch (id) {
      case 'email':
        return 'Вы будете получать уведомления о Ваших мероприятиях на адрес электронной почты, указанный при регистрации.';
      case 'sms':
        return 'Вы будете получать уведомления о Ваших мероприятиях через СМС на номер телефона, указанный при регистрации.';
      case 'webPush':
        return 'Вы будете получать уведомления о Ваших мероприятиях в интернет-браузере.';
      case 'tg':
        return 'Перейдите в телеграмм-бот для получения уведомлений о Ваших мероприятиях: @yandex_ivents_bot.';
      default:
        return '';
    }
  };

  const getOptions = (id: keyof NotificationOptions) => {
    switch (id) {
      case 'email':
        return 'По электронной почте';
      case 'sms':
        return 'По СМС';
      case 'webPush':
        return 'Пуш в веб-приложении';
      case 'tg':
        return 'В телеграмм-боте';
      default:
        return '';
    }
  };

  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.title}>Настройка уведомлений</h2>
      <p className={style.subtitle}>
        Получайте подтверждение регистрации, билеты на мероприятие и уведомления
        об их начале удобным для Вас способом
      </p>
      <div className={style.cardsContainer}>
        {Object.entries(notificationOptions).map(([id, checked]) => (
          <div className={style.container} key={id}>
            <div className={style.togglerWrapper}>
              <span className={style.labelText}>
                {getOptions(id as keyof NotificationOptions)}
              </span>
              <ToggleButton
                id={id}
                checked={checked}
                onChange={() =>
                  handleCheckboxChange(id as keyof NotificationOptions)
                }
              />
            </div>

            {checked && (
              <p className={style.expandedText}>
                {getText(id as keyof NotificationOptions)}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotificationSelectBlock;
