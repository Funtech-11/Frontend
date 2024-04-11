import {
  FC,
  SelectHTMLAttributes,
  ChangeEvent,
  KeyboardEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import style from './InputTypeSelect.module.scss';

interface IInputTypeSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  errorText?: string;
  extraClass?: string;
}

const InputTypeSelect: FC<IInputTypeSelect> = ({
  label = '',
  errorText = '',
  extraClass = '',
  onChange = () => {},
  ...SelectHTMLAttributes
}) => {
  const [inputValue, setInputValue] = useState('');
  const [optionItems, setOptionItems] = useState<
    Array<{
      value: string;
      key: string;
      disabled: boolean;
    }>
  >([]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const childElementCount = selectRef.current?.childElementCount || 0;
    const childItems = [];
    for (let i = 0; i < childElementCount; i += 1) {
      const { value, disabled } = selectRef.current?.[i] as HTMLOptionElement;
      childItems.push({ value, key: value + i, disabled });
    }

    setOptionItems(childItems);
    setInputValue(String(SelectHTMLAttributes.value || childItems[0].value));
  }, []);

  useEffect(() => {
    onChange({
      target: {
        name: SelectHTMLAttributes.name,
        value: inputValue,
        type: 'select',
      },
    } as ChangeEvent<HTMLSelectElement>);
  }, [inputValue]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSelectItem = (value: string, disabled: boolean) => {
    if (!disabled) {
      setInputValue(value);
      setIsDropdownOpen(false);
    }
  };

  const handleOverlayClick = () => {
    setIsDropdownOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLSelectElement>) => {
    const { code } = event;

    if (code === 'Enter' || code === 'Space') {
      event.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }

    if (code === 'Escape') {
      event.preventDefault();
      setIsDropdownOpen(false);
    }

    if (code === 'Tab') {
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      <label htmlFor={SelectHTMLAttributes.id} className={style.label}>
        <p className={style.title}>
          {SelectHTMLAttributes.required && <span>*</span>}
          {label}
        </p>
        <select
          {...SelectHTMLAttributes}
          ref={selectRef}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={`${style.select} ${extraClass}`}
        />
        <div className={style.wraper}>
          <div
            className={`${style.input} ${
              isDropdownOpen ? style.inputOpen : ''
            }`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p className={style.text}>{inputValue}</p>
          </div>
          {isDropdownOpen && (
            <div className={style.dropDown}>
              <div
                className={style.optionWraper}
                style={{
                  maxHeight: `${
                    SelectHTMLAttributes.size
                      ? `${44 * SelectHTMLAttributes.size}px`
                      : `calc(44px * 4 )`
                  }`,
                }}
              >
                {optionItems.map(({ value, key, disabled }) => {
                  return (
                    <div
                      key={key}
                      onClick={() => handleSelectItem(value, disabled)}
                      className={`${
                        disabled
                          ? style.dropDownItemDisabled
                          : style.dropDownItem
                      } ${value === inputValue ? style.dropDownItemSelected : ''}`}
                    >
                      <p className={style.dropDownItemText}>{value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <p className={style.error}>{errorText}</p>
      </label>
      {isDropdownOpen && (
        <div onClick={handleOverlayClick} className={style.overlay} />
      )}
    </>
  );
};

export default InputTypeSelect;
