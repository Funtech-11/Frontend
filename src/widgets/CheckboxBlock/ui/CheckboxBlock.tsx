import { FC } from 'react';
import { InputTypeCheckbox } from 'src/entities/Input/InputTypeCheckbox';
import style from './CheckboxBlock.module.scss';

interface ICheckboxBlock {
  label?: string;
  data: string[];
  required?: boolean;
  errorText?: string;
}

const CheckboxBlock: FC<ICheckboxBlock> = ({
  label = '',
  data = [],
  required = false,
  errorText = '',
}) => {
  return (
    <div className={style.label}>
      <p className={style.title}>
        {required && <span>*</span>}
        {label}
      </p>
      <ul className={style.grid}>
        {data.map((checkname, index) => (
          <li key={index}>
            <InputTypeCheckbox label={checkname} />
          </li>
        ))}
      </ul>
      <p className={style.error}>{errorText}</p>
    </div>
  );
};

export default CheckboxBlock;
