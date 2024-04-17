import { FC } from 'react';

import { Button } from 'src/entities/Button';

import style from './Banner.module.scss';

type TBannerProps = {
  path: string;
  extraClass?: string;
};

const Banner: FC<TBannerProps> = ({ path, extraClass = 'banner' }) => {
  return (
    <div className={extraClass}>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.description}>
            <h2 className={style.title}>Регистрируйтесь в один клик!</h2>
            <p className={style.text}>
              Заполните данные в личном кабинете и автоматически регистрируйтесь
              на любые мероприятия в один клик
            </p>
          </div>
        </div>
        <Button
          title="Заполнить форму регистрации"
          path={path}
          hasIcon={true}
        />
      </div>
    </div>
  );
};

export default Banner;
