import { useState, FC } from 'react';
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TableSortLabel from '@mui/material/TableSortLabel';

import { Button } from 'src/entities/Button';
import { AddItemModal, DelConfirmModal } from 'src/entities/Modals';
import { EventTableBody, PlaceTableBody, SpeakerTableBody } from '..';
import {
  TEvent,
  TPlace,
  TSpeaker,
} from 'src/widgets/AdminPanelTable/types/types';

import draftIcon from 'src/assets/images/icons/admin/draftFile.svg';
import savedIcon from 'src/assets/images/icons/admin/savedFile.svg';

import style from './AdminPanelTable.module.scss';

type TableType = 'event' | 'speaker' | 'place';

interface AdminPanelTableProps {
  type: TableType;
  speakerData?: TSpeaker[];
  eventsData?: TEvent[];
  placesData?: TPlace[];
}

const AdminPanelTable: FC<AdminPanelTableProps> = ({
  type,
  speakerData,
  eventsData,
  placesData,
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsDelModalOpen(false);
  };

  const handleAddButtonClick = () => {
    setIsAddModalOpen(true);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const headers: Record<TableType, string[]> = {
    event: [
      'НАЗВАНИЕ',
      'СТАТУС',
      'ТЕМАТИКА',
      'ДАТА',
      'ВРЕМЯ',
      'ТИП',
      'МОДЕРАЦИЯ',
      '',
    ],
    speaker: ['ФИО', 'ДОЛЖНОСТЬ', ''],
    place: ['НАЗВАНИЕ', 'АДРЕС', 'ГОРОД', 'МЕТРО', ''],
  };

  const delModalData: Record<TableType, { title: string; content: string }> = {
    event: {
      title: 'Удалить выбранные ивенты?',
      content:
        'Выбранные мероприятия будут удалены без возможности восстановления',
    },
    speaker: {
      title: 'Удалить выбранных спикеров?',
      content: 'Выбранные спикеры будут удалены без возможности восстановления',
    },
    place: {
      title: 'Удалить выбранные площадки?',
      content:
        'Выбранные площадки будут удалены без возможности восстановления',
    },
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.btnContainer}>
          {isCheckboxChecked && ( // Render Delete button when a checkbox is checked
            <Button
              title="Удалить"
              variant="outlined"
              onClick={() => setIsDelModalOpen(true)}
            />
          )}
          <Button title="Добавить" onClick={handleAddButtonClick} />
        </div>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox onChange={handleCheckboxChange} />
              </TableCell>
              {headers[type].map((header, index) => (
                <TableCell key={index}>
                  <TableSortLabel> {header}</TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {type === 'speaker' && speakerData && (
              <SpeakerTableBody speakerData={speakerData} />
            )}
            {type === 'event' && eventsData && (
              <EventTableBody eventsData={eventsData} />
            )}
            {type === 'place' && placesData && (
              <PlaceTableBody placesData={placesData} />
            )}
          </TableBody>
        </Table>
        <div className={style.legendContainer}>
          <div className={style.legendItem}>
            <img className={style.legendIcon} src={savedIcon} />
            <span className={style.legendText}>Сохранено</span>
          </div>
          <div className={style.legendItem}>
            <img className={style.legendIcon} src={draftIcon} />
            <span className={style.legendText}>Черновик</span>
          </div>
        </div>
      </div>
      {isAddModalOpen && (
        <AddItemModal
          open={isAddModalOpen}
          title={`Добавление ${type === 'speaker' ? 'спикера' : type === 'event' ? 'мероприятия' : 'площадки'}`}
          onClose={handleCloseModal}
          formType={type}
        />
      )}
      {isDelModalOpen && (
        <DelConfirmModal
          open={isDelModalOpen}
          title={delModalData[type].title}
          content={delModalData[type].content}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default AdminPanelTable;
