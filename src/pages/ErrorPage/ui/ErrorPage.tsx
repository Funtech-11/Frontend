import { useRouteError } from 'react-router-dom';

import style from './ErrorPage.module.scss';

export function ErrorPage() {
  const error = useRouteError();
  const errorMessage = typeof error === 'string' || error instanceof Error
    ? error.toString()
    : 'An unexpected error occurred';

  return (
    <div className={style.app}>
      <div id="error-page" className={style.main}>
        <div className={style.container}>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{errorMessage}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
