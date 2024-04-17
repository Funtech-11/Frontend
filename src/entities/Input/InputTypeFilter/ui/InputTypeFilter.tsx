import { FC, useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './InputTypeFilter.module.scss';

type TInputTypeFilter = {
  name: string;
  label: string;
  options: string[];
  handleFilter: (event: SelectChangeEvent<string>) => void;
};

const InputTypeFilter: FC<TInputTypeFilter> = ({
  name,
  label,
  options,
  handleFilter,
}) => {
  const [selected, setSelected] = useState('');
  const placeholder = label;

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(value);
    handleFilter(event);
  };

  return (
    <FormControl
      className={style.formControl}
      sx={{
        minWidth: 174,
        height: 40,
      }}
    >
      <Select
        labelId="filter"
        id={name}
        name={name}
        value={selected}
        onChange={handleChange}
        IconComponent={ExpandMoreIcon}
        sx={{
          width: '100%',
          maxHeight: 40,
          display: 'flex',
          alignItems: 'center',
          borderRadius: '8px',
          padding: '14px 20px 14px 24px',
          boxSizing: 'border-box',
          backgroundColor: '#1C1C1C',
          color: '#FFFFFF',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
            borderWidth: 0,
          },
          '&:hover': {
            backgroundColor: '#FF5C01',
            color: '#FFFFFF',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
          '&.Mui-focused': {
            borderBottom: '1px solid #FFFFFF',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
          },
          '& .MuiSelect-select .notranslate::after': placeholder
            ? {
                content: `'${placeholder}'`,
                color: '#FFFFFF',
              }
            : {},
          '& .MuiSvgIcon-root': {
            top: 12,
            right: 16,
            width: '16px',
            height: '16px',
          },
          '& svg.MuiSvgIcon-root path': {
            fill: '#FFFFFF',
          },
          '& .MuiOutlinedInput-input': {
            display: 'flex',
            alignItems: 'center',
            padding: 0,
            fontFamily: 'San Francisco Pro Text',
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '-0.078px',
          },
        }}
        MenuProps={{
          sx: {
            '& .MuiMenu-paper': {
              backgroundColor: '#1C1C1C',
              color: '#FFFFFF',
              borderRadius: 0,
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            },
            '& .MuiMenu-list': {
              paddingTop: '4px',
              paddingBottom: '4px',
            },
            '& .MuiMenuItem-root': {
              height: 44,
              padding: '14px 24px',
              fontFamily: 'San Francisco Pro Text',
              fontSize: '13px',
              lineHeight: '16px',
              letterSpacing: '-0.078px',
            },
            '& .MuiMenuItem-root:hover': {
              backgroundColor: '#FF5C01',
              color: '#FFFFFF',
            },
            '& .MuiMenuItem-root.Mui-selected': {
              backgroundColor: '#444652',
              color: '#FFFFFF',
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
        <MenuItem value="all">Все</MenuItem>
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputTypeFilter;
