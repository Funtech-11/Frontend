import chatSendIcon from 'src/assets/images/icons/chat/chatSend.svg';
import chatTextIcon from 'src/assets/images/icons/chat/Text.svg';
import chatSendImgIcon from 'src/assets/images/icons/chat/chatImg.svg';
import chatEmojiIcon from 'src/assets/images/icons/chat/emoji.svg';
import chatClipIcon from 'src/assets/images/icons/chat/paperclip.svg';
import { ContentLinkBtn } from 'src/features/ContentLinkBtn';

import style from './Chat.module.scss';
import { FC } from 'react';

const phrases = [
  'Оптимизация производительности баз данных',
  'Безопасность веб-приложений',
  'Современные технологии кэширования',
  'Оптимизация работы сети',
  'Разработка архитектур для обработки данных',
];

interface ChatProps {
  type: 'dialog' | 'timecodes';
}

const Chat: FC<ChatProps> = ({ type }) => {
  const renderContent = () => {
    if (type === 'dialog') {
      return (
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
      );
    } else if (type === 'timecodes') {
      return (
        <div className={style.chatContainerTag}>
          {phrases.map((phrase, index) => (
            <div className={style.tagContainer} key={index}>
              <p className={style.tagText}>{phrase}</p>
            </div>
          ))}
          <div className={style.tagsBottom}>
            <ContentLinkBtn type="button" />
          </div>
        </div>
      );
    }
  };

  return renderContent();
};

export default Chat;
