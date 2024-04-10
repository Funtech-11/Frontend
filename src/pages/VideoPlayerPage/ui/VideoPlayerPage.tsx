import { useEffect, useState } from 'react';
import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { event } from 'src/utils/mocks/eventsMockData';
import { countdown } from 'src/utils/const/conuntdown';

import chatSendIcon from 'src/assets/icons/chat/chatSend.svg';
import chatTextIcon from 'src/assets/icons/chat/Text.svg';
import chatSendImgIcon from 'src/assets/icons/chat/chatImg.svg';
import chatEmojiIcon from 'src/assets/icons/chat/emoji.svg';
import chatClipIcon from 'src/assets/icons/chat/paperclip.svg';

import style from './VideoPlayerPage.module.scss';

const VideoPlayerPage = () => {
  const [isMenuShown, setMenuShown] = useState(false);

  const [timer, setTimer] = useState('');

  useEffect(() => {
    const startingTime = new Date(event.date).getTime();

    const updateCountdown = () => {
      const newCountdown = countdown(startingTime, setTimer);
      setTimer(newCountdown);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />
      <div className={style.container}>
        <div className={style.topContainer}>
          <div className={style.playerContainer}>
            <div className={style.eventStatusWrapper}>
              <div className={style.statusDot}></div>
              <span className={style.statusText}>Идёт подготовка к ивенту</span>
            </div>
            <div className={style.timerWrapper}>
              <span className={style.timerTitle}>Старт мероприятия через:</span>
              <span className={style.timerText}>{timer}</span>
            </div>
          </div>
          <div className={style.chatContainer}>
            <h3 className={style.chatTitle}>Вопросы спикеру</h3>
            <div className={style.chatDialogBox}>
              <span className={style.chatInfoText}>
                Обсуждение начнётся после начала ивента
              </span>
            </div>
            <div>
              <div className={style.chatInputContainer}>
                <input
                  className={style.chatInput}
                  placeholder="Написать"
                  disabled
                />
                <img src={chatSendIcon} />
              </div>
              <div className={style.chatIconsContainer}>
                <img src={chatClipIcon} />
                <img src={chatSendImgIcon} />
                <img src={chatEmojiIcon} />
                <img src={chatTextIcon} />
              </div>
            </div>
          </div>
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