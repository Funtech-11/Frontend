import type { FC } from 'react';

import { ContentLinkBtn } from 'src/features/ContentLinkBtn';
import type { TProgram } from 'src/widgets/ProgrammList/types/type';

import style from './ProgrammListItem.module.scss';

type TProgramItemProps = {
  programItem: TProgram;
};

const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.slice(11, 16).split(':');
  return `${hours}:${minutes}`;
};

const ProgrammListItem: FC<TProgramItemProps> = ({ programItem }) => {
  console.log(programItem);
  return (
    <div className={style.container}>
      <div className={style.time}>{formatTime(programItem.time)}</div>
      <div className={style.infoWrapper}>
        <div className={style.title}>{programItem.name}</div>
        <div className={style.infoText}>{programItem.information}</div>
        {programItem.speaker && (
          <div className={style.speakerInfoWrapper}>
            <div className={style.avatarBox}>
              <img
                src={programItem.speaker[0].avatar}
                alt="avatar"
                className={style.avatarImg}
              />
            </div>
            <div className={style.speakerInfoContainer}>
              <h4 className={style.name}>{programItem.speaker[0].name}</h4>
              <p className={style.job}>{programItem.speaker[0].job}</p>
            </div>
          </div>
        )}
      </div>
      <div className={style.btnWrapper}>
        {programItem.materials && <ContentLinkBtn type="button" />}
        {programItem.video && <ContentLinkBtn type="link" />}
      </div>
    </div>
  );
};

export default ProgrammListItem;
