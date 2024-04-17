import { ProgrammListItem } from 'src/entities/ProgramListItem';
import style from './ProgrammList.module.scss';

import { FC } from 'react';
import { TProgrammListProps } from '../types/type';

const ProgrammList: FC<TProgrammListProps> = ({ eventInfo }) => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Программа</h2>
      <div>
        {eventInfo.programs.map(programItem => (
          <ProgrammListItem
            key={programItem.programId}
            programItem={programItem}
          />
        ))}
      </div>
    </section>
  );
};

export default ProgrammList;
