import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import presentationIcon from 'src/assets/images/icons/presentation.svg';
import playIcon from 'src/assets/images/icons/play.svg';

import type { TContentLinkBtnProps } from '../types/type';

import style from './ContentLinkBtn.module.scss';

const ContentLinkBtn: FC<TContentLinkBtnProps> = ({ type }) => {
  return (
    <div className={style.container}>
      {type === 'button' ? (
        <button type="button" className={style.downloadBtn}>
          <img src={presentationIcon} alt="download" />
        </button>
      ) : (
        <NavLink to="#">
          <img src={playIcon} alt="play" />
        </NavLink>
      )}
    </div>
  );
};

export default ContentLinkBtn;
