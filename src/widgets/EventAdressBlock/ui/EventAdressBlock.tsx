import { ButtonLink } from 'src/entities/ButtonLink';

import yandexTaxiIcon1x from 'src/assets/icons/yandexTaxi1x.png';
import yandexTaxiIcon2x from 'src/assets/icons/yandexTaxi2x.png';
import mapImg from 'src/assets/images/events/Map@2x.png';

import style from './EventAdressBlock.module.scss';

const EventAdressBlock = () => {
  console.log('hello linter');
  return (
    <section className={style.container}>
      <div className={style.cardWrapper}>
        <div className={style.adressInfoContainer}>
          <h2 className={style.title}>Москва, LOFT HALL</h2>
          <p className={style.adress}>
            ул. Ленинская Слобода, 26, строение 11, Loft 2
          </p>
          <div className={style.metroWrapper}>
            <div className={style.metroDot} />
            <span className={style.metroText}>Автозаводская</span>
          </div>
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
  );
};

export default EventAdressBlock;
