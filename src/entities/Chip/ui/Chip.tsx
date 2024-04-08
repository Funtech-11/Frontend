import { FC, MouseEvent, useState } from 'react';
import style from './Chip.module.scss';

type TChip = {
  label: string;
  clickable?: boolean;
  hasBorder?: boolean;
};

const Chip: FC<TChip> = ({ label, clickable = false, hasBorder = true }) => {
  const [isActive, setActive] = useState(false);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (clickable) setActive(!isActive);
  };

  return (
    <div
      className={`${style.chip} ${hasBorder && style.chipBordered} ${isActive && style.chipActive}`}
      onClick={handleClick}
    >
      <p className={style.title}>{label}</p>
    </div>
  );
};

export default Chip;
