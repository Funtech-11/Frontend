import type { FC } from 'react';
import style from './AboutEvent.module.scss';

interface AboutEventProps {
  type: 'long' | 'short';
  text: string;
}

const AboutEvent: FC<AboutEventProps> = ({ type, text }) => {
  if (type === 'long') {
    return (
      <section className={style.container}>
        <h2 className={style.title}>Об ивенте</h2>
        <p className={style.text}>{text}</p>
      </section>
    );
  } else if (type === 'short') {
    return (
      <section className={`${style.container} ${style.shortContainer}`}>
        <h2 className={style.title}>Об ивенте</h2>
        <p className={`${style.text} ${style.textShort}`}>{text}</p>
      </section>
    );
  } else {
    return null;
  }
};

export default AboutEvent;
