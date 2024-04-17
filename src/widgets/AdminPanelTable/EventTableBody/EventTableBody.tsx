import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import draftIcon from 'src/assets/images/icons/admin/draftFile.svg';
import savedIcon from 'src/assets/images/icons/admin/savedFile.svg';
import editIcon from 'src/assets/images/icons/admin/edit.svg';

import style from './EventTableBody.module.scss';
import { TEvent } from '../types/types';

interface IEventTableBodyProps {
  eventsData: TEvent[];
}

const EventTableBody: FC<IEventTableBodyProps> = ({ eventsData }) => {
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
      {eventsData.map(event => (
        <TableRow key={event.id}>
          <TableCell padding="checkbox" style={commonCellStyle}>
            <Checkbox />
          </TableCell>
          <TableCell style={commonCellStyle}>{event.name}</TableCell>
          <TableCell style={commonCellStyle}>
            {event.status === 'Черновик' ? (
              <div>
                <img src={draftIcon} alt="draft" />
              </div>
            ) : (
              <div>
                <img src={savedIcon} alt="saved" />
              </div>
            )}
          </TableCell>
          <TableCell style={commonCellStyle}>{event.theme}</TableCell>
          <TableCell style={commonCellStyle}>{event.date}</TableCell>
          <TableCell style={commonCellStyle}>{event.time}</TableCell>
          <TableCell style={commonCellStyle}>{event.type}</TableCell>
          <TableCell style={commonCellStyle}>
            {event.status2 === 'Завершено' ? (
              <span>Мероприятие завершено</span>
            ) : (
              <div>
                <span>Идёт регистрация</span>
                <br />
                <span>{`${event.registeredNum} / ${event.maxNum}`}</span>
              </div>
            )}
          </TableCell>
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

export default EventTableBody;
