import { FC, useState } from 'react';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Chip from '@mui/joy/Chip';
import style from './Chips.module.scss';

type TChips = {
  labels: string[];
  name?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (name: string, value: string) => void;
};

const Chips: FC<TChips> = ({
  labels,
  name = '',
  handleChange,
  handleClick,
}) => {
  const [selected, setSelected] = useState('all');

  // const handleClick = (event: MouseEvent) => {
  //   if (event.target.value === selected) {
  //     setSelected('all');
  //   } else {
  //     setSelected(event.target.value);
  //   }
  // };
  return (
    <div className={style.chips}>
      <RadioGroup
        name={name}
        orientation="horizontal"
        sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
      >
        {labels.map(label => {
          const checked = selected === label;
          return (
            <Chip
              key={label}
              sx={{
                backgroundColor: 'transparent',
                padding: 0,
                '& span.Mui-checked.MuiRadio-root': {
                  color: '#FFFFFF',
                  backgroundColor: '#FF5C01',
                  borderColor: 'transparent',
                },
                '& span.MuiRadio-root:hover': {
                  padding: '12px 22.5px',
                },
                '& span.Mui-checked.MuiRadio-root:hover': {
                  borderColor: '#FFFFFF',
                },
              }}
            >
              <Radio
                name={name}
                value={label}
                label={label}
                checked={checked}
                onClick={() => {
                  if (label === selected) setSelected('all');
                  handleClick(name, 'all');
                }}
                onChange={event => {
                  if (event.target.checked) setSelected(label);
                  handleChange(event);
                }}
                sx={{
                  width: 'fit-content',
                  boxSizing: 'border-box',
                  border: '1px solid #1c1c1c',
                  borderRadius: '8px',
                  padding: '13px 23.5px',
                  backgroundColor: '#FFFFFF',
                  fontFamily: 'San Francisco Pro Text',
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '16px',
                  letterSpacing: '-0.078px',
                  gap: 0,
                  '& span.MuiRadio-radio': {
                    width: 0,
                    height: 0,
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                  },
                  '& span.MuiRadio-icon': {
                    width: 0,
                    height: 0,
                  },
                }}
              />
            </Chip>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default Chips;
