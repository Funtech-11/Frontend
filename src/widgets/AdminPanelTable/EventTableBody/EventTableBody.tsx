import type { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import draftIcon from 'src/assets/icons/admin/draftFile.svg';
import savedIcon from 'src/assets/icons/admin/savedFile.svg';
import editIcon from 'src/assets/icons/admin/edit.svg';

import style from './EventTableBody.module.scss';
import { TEvent } from '../types/types';

interface IEventTableBodyProps {
  eventsData: TEvent[];
}

const EventTableBody: FC<IEventTableBodyProps> = ({ eventsData }) => (
  <>
    {eventsData.map(event => (
      <TableRow key={event.id}>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        <TableCell>{event.name}</TableCell>
        <TableCell>
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
        <TableCell>{event.theme}</TableCell>
        <TableCell>{event.date}</TableCell>
        <TableCell>{event.time}</TableCell>
        <TableCell>{event.type}</TableCell>
        <TableCell>
          {event.status2 === 'Завершено' ? (
            <span>Мероприятие завершено</span>
          ) : (
            <div>
              <span>Идёт регистрация</span>
              <span>{`${event.registeredNum} / ${event.maxNum}`}</span>
            </div>
          )}
        </TableCell>
        <TableCell>
          <button className={style.editBtn}>
            <img src={editIcon} alt="edit" />
          </button>
        </TableCell>
      </TableRow>
    ))}
  </>
);

export default EventTableBody;
