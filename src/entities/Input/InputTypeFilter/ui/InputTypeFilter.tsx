import { FC, useState } from 'react';
import { makeStyles } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import style from './InputTypeFilter.module.scss';

type TInputTypeFilter = {
  title: string;
  options: string[];
};

const InputTypeFilter: FC<TInputTypeFilter> = ({ title, options }) => {
  // const useStyles = makeStyles(theme => ({
  //   formControl: {
  //     margin: theme.spacing(1),
  //     width: 300,
  //   },
  //   indeterminateColor: {
  //     color: '#f50057',
  //   },
  //   selectAllText: {
  //     fontWeight: 500,
  //   },
  //   selectedAll: {
  //     backgroundColor: 'rgba(0, 0, 0, 0.08)',
  //     '&:hover': {
  //       backgroundColor: 'rgba(0, 0, 0, 0.08)',
  //     },
  //   },
  // }));
  const [selected, setSelected] = useState<string[]>([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    if (value[value.length - 1] === 'all') {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <FormControl className={style.formControl}>
      <label id="mutiple-select-label">{title}</label>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={selected => selected.join(', ')}
        // MenuProps={MenuProps}
      >
        <MenuItem
          value="all"
          classes={{
            root: isAllSelected ? style.selectedAll : '',
          }}
        >
          <ListItemIcon>
            <Checkbox
              classes={{ indeterminate: style.indeterminateColor }}
              checked={isAllSelected}
              indeterminate={
                selected.length > 0 && selected.length < options.length
              }
            />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: style.selectAllText }}
            primary="Select All"
          />
        </MenuItem>
        {options.map(option => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option) > -1} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputTypeFilter;
