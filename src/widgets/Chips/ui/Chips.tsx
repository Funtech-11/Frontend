import { FC, useState } from 'react';
import { Chip } from 'src/entities/Chip';
import style from './Chips.module.scss';

type TChips = {
  labels: string[];
};

const Chips: FC<TChips> = ({ labels }) => {
  const [activeChip, setActiveChip] = useState(null);

  return (
    <ul className={style.chips}>
      {labels.map((theme, index) => {
        return (
          <li key={index}>
            <Chip
              label={theme}
              clickable={true}
              activeChip={activeChip}
              setActiveChip={setActiveChip}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Chips;
