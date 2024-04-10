import { FC } from 'react';
import oneClickImage from 'src/assets/images/banner/one-click.png';
import { Button } from 'src/entities/Button';
import style from './Banner.module.scss';

type TBannerProps = {
  extraClass?: string;
};

const Banner: FC<TBannerProps> = ({ extraClass = 'banner' }) => {
  return (
    <div className={extraClass}>
      <div className={style.container}>
        <div className={style.info}>
          <img
            src={oneClickImage}
            alt="Регистрируйтесь в один клик!"
            className={style.image}
          />
          <div className={style.description}>
            <h2 className={style.title}>Регистрируйтесь в один клик!</h2>
            <p className={style.text}>
              Заполните данные в личном кабинете и автоматически регистрируйтесь
              на любые мероприятия в один клик
            </p>
          </div>
        </div>
        <Button title="Заполнить форму регистрации" hasIcon={true} />
      </div>
    </div>
  );
};

export default Banner;
