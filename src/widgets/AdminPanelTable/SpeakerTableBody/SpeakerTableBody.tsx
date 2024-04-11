import type { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import editIcon from 'src/assets/icons/admin/edit.svg';

import style from './SpeakerTableBody.module.scss';
import { TSpeaker } from '../types/types';

interface ISpeakerTableBodyProps {
  speakerData: TSpeaker[];
}

const SpeakerTableBody: FC<ISpeakerTableBodyProps> = ({ speakerData }) => (
  <>
    {speakerData.map(speaker => (
      <TableRow key={speaker.id}>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        <TableCell>
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
        <TableCell>{speaker.job}</TableCell>
        <TableCell>
          <button className={style.editBtn}>
            <img src={editIcon} alt="edit" />
          </button>
        </TableCell>
      </TableRow>
    ))}
  </>
);

export default SpeakerTableBody;
