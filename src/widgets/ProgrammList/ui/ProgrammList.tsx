import { ProgrammListItem } from 'src/entities/ProgramListItem';
import style from './ProgrammList.module.scss';

import { event } from '../const/mockData';

const ProgrammList = () => {
  console.log('hello linter');
  return (
    <section className={style.container}>
      <h2 className={style.title}>Программа</h2>
      <div>
        {event.programs.map(programItem => (
          <ProgrammListItem key={programItem.id} programItem={programItem} />
        ))}
      </div>
    </section>
  );
};

export default ProgrammList;
