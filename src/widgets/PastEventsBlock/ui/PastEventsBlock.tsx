import style from './PastEventsBlock.module.scss';

const PastEventsBlock = () => {
  console.log('hello linter');
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.pageTitle}>Мои прошедшие мероприятия</h2>
    </section>
  );
};

export default PastEventsBlock;
