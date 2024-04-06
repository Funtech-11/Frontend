import { ProgrammListItem } from 'src/entities/ProgramListItem';
import style from './ProgrammList.module.scss';

const ProgrammList = () => {
  console.log('hello linter');
  return (
    <section className={style.container}>
      <h2 className={style.title}>Программа</h2>
      <div>
        <ProgrammListItem />
      </div>
    </section>
  );
};

export default ProgrammList;
