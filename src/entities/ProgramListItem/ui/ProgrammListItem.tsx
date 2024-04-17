import type { FC } from 'react';

import { ContentLinkBtn } from 'src/features/ContentLinkBtn';
import userIcon from 'src/assets/images/avatars/d5416a40d7827c291258f6bb352a2076.jpeg';

import style from './ProgrammListItem.module.scss';
import { IProgram } from 'src/shared/api/events/dtos';

type TProgramItemProps = {
  programItem: IProgram;
};

const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.slice(11, 16).split(':');
  return `${hours}:${minutes}`;
};

const ProgrammListItem: FC<TProgramItemProps> = ({ programItem }) => {
  return (
    <div className={style.container}>
      <div className={style.time}>{formatTime(programItem.dateTime)}</div>
      <div className={style.infoWrapper}>
        <div className={style.title}>{programItem.name}</div>
        <div className={style.infoText}>{programItem.information}</div>
        {programItem.speaker && (
          <div className={style.speakerInfoWrapper}>
            <div className={style.avatarBox}>
              {programItem.speaker.avatar ? (
                <img
                  src={programItem.speaker.avatar}
                  alt="avatar"
                  className={style.avatarImg}
                />
              ) : (
                <img src={userIcon} alt="avatar" className={style.avatarImg} />
              )}
            </div>
            <div className={style.speakerInfoContainer}>
              <h4 className={style.name}>{programItem.speaker.name}</h4>
              <p className={style.job}>{programItem.speaker.job}</p>
            </div>
          </div>
        )}
      </div>
      <div className={style.btnWrapper}>
        {programItem.speaker && <ContentLinkBtn type="button" />}
        {programItem.speaker && <ContentLinkBtn type="link" />}
      </div>
    </div>
  );
};

export default ProgrammListItem;
