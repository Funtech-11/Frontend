import { useState, type FC, useEffect } from 'react';

import { useAppSelector } from 'src/app/store/hooks';
import { selectUser } from 'src/app/store/reducers/user/model/userSlice';

import type { TMainInfoEventProps } from '../types/type';
import { countdown } from 'src/utils/const/conuntdown';
import { Button } from 'src/entities/Button';
import { FormModal } from 'src/entities/Modals';
import {
  formatDateStringNoTime,
  formatDateStringReg,
  formatDateStringTime,
} from 'src/utils/const/formatDate';
import { eventFormatDict, themeDict } from 'src/utils/const/lib';
import cardImg1 from 'src/assets/images/mock/1.png';
import { ButtonLink } from 'src/entities/ButtonLink';

import style from './MainInfoEvent.module.scss';

const MainInfoEvent: FC<TMainInfoEventProps> = ({ eventInfo }) => {
  const { user, token } = useAppSelector(selectUser);

  const isLoggedIn = !!token;

  const [timer, setTimer] = useState('');

  useEffect(() => {
    const startingTime = new Date(eventInfo.dateTimeStart).getTime();

    const updateCountdown = () => {
      const newCountdown = countdown(startingTime);
      setTimer(newCountdown);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  const [showNewText, setShowNewText] = useState(false);

  const handleClick = () => {
    setShowNewText(!showNewText);
  };

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <>
      <section className={style.container}>
        <div className={style.btnWrapper}>
          {eventInfo.status === 'FINISHED' ? (
            <ButtonLink title="Cмотреть запись" hasIcon path="/video/1" />
          ) : isLoggedIn ? (
            <Button
              title="Зарегистрироваться"
              hasIcon
              onClick={handleOpenModal}
            />
          ) : (
            <Button title="Зарегистрироваться" hasIcon path="/login" />
          )}
        </div>
        {eventInfo.theme.name ? (
          <div
            className={`${style.infoItem} ${style.text} ${style.gridPosition1}`}
          >
            {themeDict[eventInfo.theme.name]}
          </div>
        ) : (
          <div
            className={`${style.infoItem} ${style.text} ${style.gridPosition1}`}
          >
            Другое
          </div>
        )}
        {eventInfo.eventFormat ? (
          <div
            className={`${style.infoItem} ${style.text} ${style.gridPosition2}`}
          >
            {eventFormatDict[eventInfo.eventFormat]}
          </div>
        ) : (
          <div
            className={`${style.infoItem} ${style.text} ${style.gridPosition2}`}
          >
            Конференция
          </div>
        )}

        <div
          className={`${style.infoItem} ${style.longCard} ${style.gridPositionTitle} ${style.cardWithHover}`}
          onClick={handleClick}
        >
          {showNewText ? (
            <p className={style.textAfterClick}>{eventInfo.information}</p>
          ) : (
            <>
              <h2 className={style.title}>{eventInfo.name}</h2>
              <span className={style.textSpan}>By Yandex</span>
            </>
          )}
        </div>
        <div
          className={`${style.infoItem} ${style.longCard} ${style.gridPositionTimer}`}
        >
          {eventInfo.status === 'FINISHED' ? (
            <p className={style.timerTitle}>Мероприятие завершено</p>
          ) : (
            <p className={style.timerTitle}>Старт мероприятия через:</p>
          )}
          {eventInfo.status === 'FINISHED' ? null : (
            <span className={style.timerText}>{timer}</span>
          )}
        </div>
        {eventInfo.location ? (
          <div
            className={`${style.infoItem} ${style.text} ${style.gridPosition3}`}
          >
            {eventInfo.location.city}
          </div>
        ) : (
          <div
            className={`${style.infoItem} ${style.text} ${style.gridPosition3}`}
          >
            Москва
          </div>
        )}

        <div
          className={`${style.infoItem} ${style.text} ${style.gridPosition4}`}
        >
          {capitalizeFirstLetter(eventInfo.eventType)}
        </div>
        <div
          className={`${style.infoItem} ${style.text} ${style.gridPosition5}`}
        >
          {formatDateStringNoTime(eventInfo.dateTimeStart)}
        </div>
        <div
          className={`${style.infoItem} ${style.text} ${style.gridPosition6}`}
        >
          {`${formatDateStringTime(eventInfo.dateTimeStart)} - ${formatDateStringTime(eventInfo.dateTimeEnd)}`}
        </div>
        {eventInfo.wallpaper ? (
          <div className={`${style.bannerItem} ${style.gridPositionWallpaper}`}>
            <img
              className={style.bannerImg}
              src={eventInfo.wallpaper}
              alt="баннер"
            />
            {eventInfo.status === 'FINISHED' ? (
              <div className={style.statusWrapper}>
                <div className={style.statusDotFinished} />
                <p className={style.statusText}>Завершено</p>
              </div>
            ) : (
              <div className={style.statusWrapper}>
                <div className={style.statusDotActive} />
                <p className={style.statusText}>
                  {`Регистрация открыта до ${formatDateStringReg(eventInfo.dateTimeStart)}`}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className={`${style.bannerItem} ${style.gridPositionWallpaper}`}>
            <img className={style.bannerImg} src={cardImg1} alt="баннер" />
            <div className={style.statusWrapper}>
              <div className={style.statusDotActive} />
              <p className={style.statusText}>
                {`Регистрация открыта до ${formatDateStringReg(eventInfo.dateTimeStart)}`}
              </p>
            </div>
          </div>
        )}
      </section>
      {user.id === 7 && openModal && (
        <FormModal
          open={openModal}
          handleClose={handleCloseModal}
          isRegistered
        />
      )}
      {user.id === 5 && openModal && (
        <FormModal
          open={openModal}
          handleClose={handleCloseModal}
          isRegistered={false}
        />
      )}
    </>
  );
};

export default MainInfoEvent;
