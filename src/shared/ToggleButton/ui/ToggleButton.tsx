import { FC } from 'react';
import style from './ToggleButton.module.scss';

type TToggleButtonProps = {
  id: string;
  checked: boolean;
  onChange: () => void;
};

const ToggleButton: FC<TToggleButtonProps> = ({ id, checked, onChange }) => {
  return (
    <div className={style.checkBox}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id} className={style.checkButton}></label>
    </div>
  );
};

export default ToggleButton;
