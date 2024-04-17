import { FC, MouseEvent, useState, useEffect, useCallback } from 'react';
import style from './Chip.module.scss';

type TChip = {
  label: string;
  clickable?: boolean;
  hasBorder?: boolean;
  activeChip?: string | null;
  // eslint-disable-next-line
  setActiveChip?: React.Dispatch<React.SetStateAction<any>>;
};

const Chip: FC<TChip> = ({
  label,
  clickable = false,
  hasBorder = true,
  activeChip = null,
  setActiveChip = () => {},
}) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (activeChip === label) setActive(true);
    if (activeChip !== label) setActive(false);
    // eslint-disable-next-line
  }, [activeChip]);

  const handleClick = useCallback(
    // eslint-disable-next-line
    (event: MouseEvent<HTMLDivElement>) => {
      if (clickable) {
        if (activeChip === null) {
          setActiveChip(label);
          setActive(true);
        }

        if (activeChip === label) {
          setActiveChip(null);
          setActive(false);
        }

        if (activeChip !== label && activeChip !== null) {
          setActiveChip(label);
        }
      }
    },
    // eslint-disable-next-line
    [setActiveChip, label]
  );

  return (
    <div
      className={`${style.chip} ${clickable && style.chipClickable} ${hasBorder && style.chipBordered} ${isActive && style.chipActive}`}
      onClick={handleClick}
    >
      <p className={style.title}>{label}</p>
    </div>
  );
};

export default Chip;
