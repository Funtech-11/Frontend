import { FC, InputHTMLAttributes, useState } from 'react';
import style from './InputTypeCheckbox.module.scss';

interface IInputTypeCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  extraClass?: string;
}

const InputTypeCheckbox: FC<IInputTypeCheckbox> = ({
  label = '',
  extraClass = '',
  ...InputHTMLAttributes
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={style.label}>
      <span className={style.wrap}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className={style.checkbox}
          {...InputHTMLAttributes}
        />
      </span>
      <p className={style.title}>{label}</p>
    </label>
  );
};

export default InputTypeCheckbox;
