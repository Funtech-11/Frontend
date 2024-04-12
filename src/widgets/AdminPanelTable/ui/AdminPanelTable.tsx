import { useState, type FC } from 'react';
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
import { AddItemModal } from 'src/entities/Modals/AddItemModal';

import draftIcon from 'src/assets/images/icons/admin/draftFile.svg';
import savedIcon from 'src/assets/images/icons/admin/savedFile.svg';

import { EventTableBody, PlaceTableBody, SpeakerTableBody } from '..';
import { TEvent, TPlace, TSpeaker } from '../types/types';

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
  const [isAddSpeakerModalOpen, setIsAddSpeakerModalOpen] = useState(false);
  const [isAddPlaceModalOpen, setIsAddPlaceModalOpen] = useState(false);
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsAddSpeakerModalOpen(false);
    setIsAddPlaceModalOpen(false);
    setIsAddEventModalOpen(false);
  };

  const handleAddButtonClick = () => {
    if (type === 'speaker') {
      setIsAddSpeakerModalOpen(true);
    } else if (type === 'event') {
      setIsAddEventModalOpen(true);
    } else if (type === 'place') {
      setIsAddPlaceModalOpen(true);
    }
  };

  let headers: string[] = [];

  if (type === 'event') {
    headers = [
      'НАЗВАНИЕ',
      'СТАТУС',
      'ТЕМАТИКА',
      'ДАТА',
      'ВРЕМЯ',
      'ТИП',
      'МОДЕРАЦИЯ',
      '',
    ];
  } else if (type === 'speaker') {
    headers = ['ФИО', 'ДОЛЖНОСТЬ', ''];
  } else if (type === 'place') {
    headers = ['НАЗВАНИЕ', 'АДРЕС', 'ГОРОД', 'МЕТРО', ''];
  } else {
    headers = [];
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.btnContainer}>
          {type === 'speaker' && (
            <Button title="Добавить" onClick={handleAddButtonClick} />
          )}
          {type === 'event' && (
            <Button title="Добавить" onClick={handleAddButtonClick} />
          )}
          {type === 'place' && (
            <Button title="Добавить" onClick={handleAddButtonClick} />
          )}
        </div>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              {headers.map((header, index) => (
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
      {isAddSpeakerModalOpen && (
        <AddItemModal
          open={isAddSpeakerModalOpen}
          title="Добавление спикера"
          onClose={handleCloseModal}
        />
      )}
      {isAddEventModalOpen && (
        <AddItemModal
          open={isAddEventModalOpen}
          title="Добавление мероприятия"
          onClose={handleCloseModal}
        />
      )}
      {isAddPlaceModalOpen && (
        <AddItemModal
          open={isAddPlaceModalOpen}
          title="Добавление места"
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default AdminPanelTable;
