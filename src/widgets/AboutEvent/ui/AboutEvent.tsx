import type { FC } from 'react';
import style from './AboutEvent.module.scss';

interface AboutEventProps {
  type: 'long' | 'short';
}

const AboutEvent: FC<AboutEventProps> = ({ type }) => {
  console.log('hello linter');

  if (type === 'long') {
    return (
      <section className={style.container}>
        <h2 className={style.title}>Об ивенте</h2>
        <p className={style.text}>
          Узнайте о последних инновациях и передовых стратегиях для создания
          мобильных приложений от ведущих экспертов Яндекса
        </p>
      </section>
    );
  } else if (type === 'short') {
    return (
      <section className={`${style.container} ${style.shortContainer}`}>
        <h2 className={style.title}>Об ивенте</h2>
        <p className={`${style.text} ${style.textShort}`}>
          Узнайте о последних инновациях и стратегиях для создания мобильных
          приложений от экспертов Яндекса
        </p>
      </section>
    );
  } else {
    return null;
  }
};

export default AboutEvent;
