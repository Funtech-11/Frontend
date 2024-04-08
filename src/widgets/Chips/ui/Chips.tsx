import type { FC } from 'react';
import { Chip } from 'src/entities/Chip';
import style from './Chips.module.scss';

type TChips = {
  labels: string[];
};

const Chips: FC<TChips> = ({ labels }) => {
  return (
    <ul className={style.chips}>
      {labels.map((theme, index) => {
        return (
          <li key={index}>
            <Chip label={theme} clickable={true} />
          </li>
        );
      })}
    </ul>
  );
};

export default Chips;
