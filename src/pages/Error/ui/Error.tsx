import { FC } from 'react';
import { TError } from '../types/type';

import style from './Error.module.scss';
import { ButtonLink } from '../../../entities/ButtonLink';

const Error: FC<TError> = ({ errorMessage, errorCode }) => {
  return (
    <div className={style.layout}>
      <div className={style.container}>
        <h1 className={style.codeText}>{errorCode}</h1>
        <p className={style.messageText}>{errorMessage}</p>
        <div className={style.btnWrapper}>
          <ButtonLink title="Вернуться на главную" path="/" hasIcon />
        </div>
      </div>
    </div>
  );
};

export default Error;
