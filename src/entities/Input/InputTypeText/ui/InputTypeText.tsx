import { FC, InputHTMLAttributes } from 'react';
import style from './InputTypeText.module.scss';

interface IInputTypeText extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
  extraClass?: string;
}

const InputTypeText: FC<IInputTypeText> = ({
  label = '',
  errorText = '',
  extraClass = '',
  ...InputHTMLAttributes
}) => {
  return (
    <label
      htmlFor={InputHTMLAttributes.id}
      className={`${style.label} ${extraClass}`}
    >
      <p className={style.title}>
        {InputHTMLAttributes.required && <span>*</span>}
        {label}
      </p>
      <input
        type={InputHTMLAttributes.type}
        {...InputHTMLAttributes}
        className={style.input}
      />
      <p className={style.error}>{errorText}</p>
    </label>
  );
};

export default InputTypeText;
