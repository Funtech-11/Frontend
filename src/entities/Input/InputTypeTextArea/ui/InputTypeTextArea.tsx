import { FC, InputHTMLAttributes } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import style from './InputTypeTextArea.module.scss';

interface IInputTypeTextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  errorText?: string;
  extraClass?: string;
}

const InputTypeTextArea: FC<IInputTypeTextArea> = ({
  name,
  label = '',
  errorText = '',
  extraClass = '',
  ...InputHTMLAttributes
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <label
      htmlFor={InputHTMLAttributes.id}
      className={`${style.label} ${extraClass}`}
    >
      <p className={style.title}>
        {InputHTMLAttributes.required && <span>*</span>}
        {label}
      </p>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <textarea
            value={value}
            onChange={onChange}
            className={style.input}
            {...InputHTMLAttributes}
          />
        )}
      />
      {errors[name] && <p className={style.error}>{errorText}</p>}
    </label>
  );
};

export default InputTypeTextArea;
