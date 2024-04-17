import { FC, SelectHTMLAttributes, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './InputTypeSelect.module.scss';

interface IInputTypeSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: string[];
  errorText?: string;
}

const InputTypeSelect: FC<IInputTypeSelect> = ({
  name,
  label,
  options,
  errorText = '',
  ...SelectHTMLAttributes
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [selected, setSelected] = useState('');
  const placeholder = 'Выбрать...';

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(value);
  };

  return (
    <div className={style.select}>
      <FormControl
        variant="outlined"
        fullWidth
        sx={{
          minWidth: 120,
          maxHeight: 68,
          minHeight: 44,
          flex: 1,
          justifyContent: 'flex-end',
          '&.Mui-focused': {
            border: '2px solid #FF5C01',
          },
        }}
      >
        <InputLabel
          id="select"
          disableAnimation={true}
          shrink={true}
          sx={{
            color: '#444652',
            fontFamily: 'San Francisco Pro Text',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '-.32px',
            position: 'unset',
            transform: 'initial',
            marginBottom: '4px',
            '&.Mui-focused': {
              color: '#444652',
            },
          }}
        >
          {SelectHTMLAttributes.required && <span>*</span>}
          {label}
        </InputLabel>
        <Controller
          name={name}
          control={control}
          rules={{
            required: {
              value: !!SelectHTMLAttributes.required,
              message: errorText,
            },
          }}
          render={({
            field: { value = selected, onChange = handleChange },
          }) => (
            <Select
              id={name}
              labelId="select"
              value={value}
              onChange={onChange}
              IconComponent={ExpandMoreIcon}
              sx={{
                width: '100%',
                maxHeight: 44,
                flex: 1,
                borderRadius: '12px',
                backgroundColor: '#F4F5F7',
                boxSizing: 'border-box',
                padding: '11px 15px',
                color: '#1C1C1C',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid #BBB9BA',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF5C01',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  border: '2px solid #FF5C01',
                },
                '& .MuiSelect-select .notranslate::after': placeholder
                  ? {
                      content: `'${placeholder}'`,
                      color: '#BBB9BA',
                    }
                  : {},
                '& .MuiSvgIcon-root': { right: 16 },
                '& svg.MuiSvgIcon-root path': { fill: '#444652' },
                '& .MuiOutlinedInput-root': {
                  borderColor: 'blue',
                },
                '& .MuiOutlinedInput-input': {
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0,
                  fontFamily: 'San Francisco Pro Text',
                  fontSize: '16px',
                  lineHeight: '20px',
                  letterSpacing: '-0.32px',
                },
                '& .MuiOutlinedInput-input:focus': {
                  backgroundColor: 'transparent',
                },
              }}
              MenuProps={{
                sx: {
                  '& .MuiMenu-paper': {
                    backgroundColor: '#FFFFFF',
                    color: '#1C1C1C',
                    borderRadius: '8px',
                  },
                  '& .MuiMenu-list': {
                    paddingTop: '4px',
                    paddingBottom: '4px',
                  },
                  '& .MuiMenuItem-root': {
                    height: 44,
                    padding: '12px 24px',
                    fontFamily: 'San Francisco Pro Text',
                    fontSize: '13px',
                    lineHeight: '16px',
                    letterSpacing: '-0.078px',
                  },
                  '& .MuiMenuItem-root:hover': {
                    backgroundColor: '#FF5C01',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                  },
                  '& .MuiMenuItem-root.Mui-selected': {
                    backgroundColor: '#1C1C1C',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                  },
                  '& .Mui-focusVisible': {
                    borderRadius: '8px',
                  },
                  '& .MuiMenuItem-root.Mui-selected.Mui-focusVisible': {
                    backgroundColor: '#1C1C1C',
                  },
                  '& .MuiMenuItem-root.Mui-selected:hover': {
                    backgroundColor: '#FF5C01',
                  },
                },
              }}
            >
              {options.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
      {errors[name] && (
        // <p className={style.error}>{`${errors[name]['message']}`}</p>
        <p className={style.error}>{errorText}</p>
      )}
    </div>
  );
};

export default InputTypeSelect;
