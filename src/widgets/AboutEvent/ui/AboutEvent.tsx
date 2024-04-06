import style from './AboutEvent.module.scss';

const AboutEvent = () => {
  console.log('hello linter');
  return (
    <section className={style.container}>
      <h2 className={style.title}>Об ивенте</h2>
      <p className={style.text}>
        Узнайте о последних инновациях и передовых стратегиях для создания
        мобильных приложений от ведущих экспертов Яндекса
      </p>
    </section>
  );
};

export default AboutEvent;
