import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { event } from 'src/utils/mocks/eventsMockData';
import { countdown } from 'src/utils/const/conuntdown';
import { Player } from 'src/features/Player';
import { Chat } from 'src/widgets/Chat';

import style from './VideoPlayerPage.module.scss';

const VideoPlayerPage = () => {
  const { id } = useParams();

  const [isMenuShown, setMenuShown] = useState(false);
  const [timer, setTimer] = useState('');

  useEffect(() => {
    const startingTime = new Date(event.date).getTime();

    const updateCountdown = () => {
      const newCountdown = countdown(startingTime);
      setTimer(newCountdown);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const renderBackgroundImage = () => (
    <div className={style.bgImgContainer}>
      <img className={style.bgImg} src={event.wallpaper} alt={event.name} />
    </div>
  );

  const renderEventStatus = () => (
    <div className={style.eventStatusWrapper}>
      <div className={style.statusDot}></div>
      <span className={style.statusText}>
        {id === '2' ? 'Идёт подготовка к ивенту' : 'Запись сохранена'}
      </span>
    </div>
  );

  const renderTimer = () => (
    <div className={style.timerWrapper}>
      <span className={style.timerTitle}>Старт мероприятия через:</span>
      <span className={style.timerText}>{timer}</span>
    </div>
  );

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />
      <div className={style.container}>
        <div className={style.topContainer}>
          <div className={style.playerContainer}>
            <div className={style.payerBg}>
              {id === '2' && renderBackgroundImage()}
              {renderEventStatus()}
              {id === '2' ? renderTimer() : <Player />}
            </div>
          </div>
          {id === '2' && <Chat type="dialog" />}
          {id === '1' && <Chat type="timecodes" />}
        </div>
        <div className={style.infoContainer}>
          <div className={style.eventWallpaperWrapper}>
            <img className={style.wallpaperImg} src={event.wallpaper} />
          </div>
          <div>
            <h3 className={style.eventTitle}>{event.name}</h3>
            <p className={style.eventText}>{event.information}</p>
          </div>
        </div>
      </div>
      <div className={style.main}></div>
    </div>
  );
};

export default VideoPlayerPage;
