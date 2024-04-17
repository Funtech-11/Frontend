import { useRouteError } from 'react-router-dom';
import { ButtonLink } from 'src/entities/ButtonLink';

import style from './ErrorPage.module.scss';

export function ErrorPage() {
  const error = useRouteError();
  const errorMessage =
    typeof error === 'string' || error instanceof Error
      ? error.toString()
      : 'An unexpected error occurred';

  return (
    <div className={style.layout}>
      <div className={style.container}>
        <h1 className={style.codeText}>503</h1>
        <p className={style.messageText}>Что-то пошло не так</p>
        <p className={style.messageText}>{errorMessage}</p>
        <div className={style.btnWrapper}>
          <ButtonLink title="Вернуться на главную" path="/" hasIcon />
        </div>
      </div>
    </div>
  );
}
