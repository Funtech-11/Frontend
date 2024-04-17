import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import editIcon from 'src/assets/images/icons/admin/edit.svg';

import style from './SpeakerTableBody.module.scss';
import { TSpeaker } from '../types/types';

interface ISpeakerTableBodyProps {
  speakerData: TSpeaker[];
}

const SpeakerTableBody: FC<ISpeakerTableBodyProps> = ({ speakerData }) => {
  const commonCellStyle = {
    color: '#1C1C1C',
    fontFamily: 'San Francisco Pro Text',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',
    borderBottom: '1px solid #BBB9BA',
  };

  return (
    <>
      {speakerData.map(speaker => (
        <TableRow key={speaker.id}>
          <TableCell padding="checkbox" style={commonCellStyle}>
            <Checkbox />
          </TableCell>
          <TableCell style={commonCellStyle}>
            <div className={style.nameCell}>
              <div className={style.avatarWrapper}>
                <img
                  className={style.avatarImg}
                  src={speaker.avatar}
                  alt={speaker.name}
                />
              </div>
              {speaker.name}
            </div>
          </TableCell>
          <TableCell style={commonCellStyle}>{speaker.job}</TableCell>
          <TableCell style={commonCellStyle}>
            <button className={style.editBtn}>
              <img src={editIcon} alt="edit" />
            </button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default SpeakerTableBody;
