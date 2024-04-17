import { FC } from 'react';
import { Control, FieldValues, useWatch, useController } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
} from '@mui/material';
import style from './CheckboxGroup.module.scss';

type TOption = {
  label: string;
  value: number;
};

interface ICheckboxGroup {
  control?: Control<FieldValues>;
  label: string;
  name: string;
  options: TOption[];
  required?: boolean;
  multiple?: boolean;
  errorText?: string;
}

const CheckboxGroup: FC<ICheckboxGroup> = ({
  control,
  label,
  name,
  options,
  required = false,
  multiple = true,
  errorText = '',
  // eslint-disable-next-line
  ...rest
}) => {
  // eslint-disable-next-line
  const config = { label: 'label', value: 'value' };
  const {
    field: { ref, value, onChange, ...inputProps },
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  const checkboxIds = useWatch({ control, name: name }) || [];

  const handleChange = (value: number) => {
    if (multiple) {
      const newArray = [...checkboxIds];
      const item = value;

      if (newArray.length > 0) {
        const index = newArray.findIndex(x => x === item);

        if (index === -1) {
          newArray.push(item);
        } else {
          newArray.splice(index, 1);
        }
      } else {
        newArray.push(item);
      }

      onChange(newArray);
    } else {
      onChange([value]);
    }
  };

  return (
    <div className={style.group}>
      <FormControl
        fullWidth
        required={required}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {label && (
          <FormLabel
            sx={{
              color: '#444652',
              fontFamily: 'San Francisco Pro Text',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '20px',
              letterSpacing: '-.32px',
              '&.Mui-focused': {
                color: '#444652',
              },
              '&.Mui-required': {
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
              },
            }}
          >
            {label}
          </FormLabel>
        )}
        <FormGroup
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridTemplateRows: 'min-content',
            gridAutoRows: 'min-content',
            gap: '12px',
          }}
        >
          {options.map(option => (
            <FormControlLabel
              sx={{
                width: '100%',
                minHeight: '52px',
                gap: '10px',
                backgroundColor: '#F4F5F7',
                boxSizing: 'border-box',
                padding: '11px 18px 11px 15px',
                margin: 0,
                border: '1px solid #BBB9BA',
                borderRadius: '12px',
              }}
              control={
                <Checkbox
                  checked={value?.some(
                    (checked: number) => checked === option.value
                  )}
                  {...inputProps}
                  inputRef={ref}
                  onChange={() => handleChange(option.value)}
                  sx={{
                    width: '28px',
                    height: '28px',
                    '& svg.MuiSvgIcon-root': {
                      width: '28px',
                      height: '28px',
                    },
                    '& svg.MuiSvgIcon-root path': {
                      fill: '#444652',
                    },
                    '& svg.MuiSvgIcon-root[data-testid="CheckBoxIcon"] path': {
                      fill: 'transparent',
                      stroke: '#444652',
                    },
                  }}
                />
              }
              label={<p className={style.checkname}>{option.label}</p>}
              key={option.value}
            />
          ))}
        </FormGroup>
        {errors[name] && (
          // <p className={style.error}>{`${errors[name]['message']}`}</p>
          <p className={style.error}>{errorText}</p>
        )}
      </FormControl>
    </div>
  );
};

export default CheckboxGroup;
