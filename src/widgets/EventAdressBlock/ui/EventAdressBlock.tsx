import { ButtonLink } from 'src/entities/ButtonLink';

import yandexTaxiIcon1x from 'src/assets/images/yandexTaxi1x.png';
import yandexTaxiIcon2x from 'src/assets/images/yandexTaxi2x.png';
import mapImg from 'src/assets/images/events/Map@2x.png';

import style from './EventAdressBlock.module.scss';
import { FC } from 'react';
import { TEventAdressBlockProps } from '../types/type';

const EventAdressBlock: FC<TEventAdressBlockProps> = ({ eventInfo }) => {
  return eventInfo.location ? (
    <section className={style.container}>
      <div className={style.cardWrapper}>
        <div className={style.adressInfoContainer}>
          <div>
            {eventInfo.location.city ? (
              <h2 className={style.title}>{`${eventInfo.location.city}`}</h2>
            ) : null}
            {eventInfo.location.building ? (
              <h2
                className={style.title}
              >{`, ${eventInfo.location.building}`}</h2>
            ) : null}
          </div>
          {eventInfo.location.address ? (
            <p className={style.adress}>{eventInfo.location.address}</p>
          ) : null}

          {eventInfo.location.metroStation ? (
            <div className={style.metroWrapper}>
              <div className={style.metroDot} />
              <span className={style.metroText}>Автозаводская</span>
            </div>
          ) : null}
        </div>
        <div className={style.callTaxiWrapper}>
          <div className={style.taxiIconContainer}>
            <picture>
              <source srcSet={yandexTaxiIcon1x} media="(max-width: 767px)" />
              <source srcSet={yandexTaxiIcon2x} media="(min-width: 768px)" />
              <img
                srcSet={`${yandexTaxiIcon1x} 1x, ${yandexTaxiIcon2x} 2x`}
                alt="Изображение"
                className={style.taxiIcon}
              />
            </picture>
          </div>
          <ButtonLink
            title="Вызвать такси"
            path="https://taxi.yandex.com/en_am/"
            hasIcon
          />
        </div>
      </div>
      <div className={`${style.cardWrapper} ${style.mapCardWrapper}`}>
        <img className={style.mapImg} src={mapImg} alt="карта" />
      </div>
    </section>
  ) : null;
};

export default EventAdressBlock;
