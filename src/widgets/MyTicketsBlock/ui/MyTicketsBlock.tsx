import style from './MyTicketsBlock.module.scss';

const MyTicketsBlock = () => {
  console.log('hello linter');
  return (
    <section className={style.sectionWrapper}>
      <h2 className={style.pageTitle}>Мои билеты</h2>
    </section>
  );
};

export default MyTicketsBlock;
