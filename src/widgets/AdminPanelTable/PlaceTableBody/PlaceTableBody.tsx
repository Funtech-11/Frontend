import type { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import editIcon from 'src/assets/images/icons/admin/edit.svg';

import style from './PlaceTableBody.module.scss';
import { TPlace } from '../types/types';

interface IPlaceTableBodyProps {
  placesData: TPlace[];
}

const PlaceTableBody: FC<IPlaceTableBodyProps> = ({ placesData }) => (
  <>
    {placesData.map(place => (
      <TableRow key={place.id}>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        <TableCell>{place.name}</TableCell>
        <TableCell>{place.adress}</TableCell>
        <TableCell>{place.city}</TableCell>
        {place.metroStation ? (
          <TableCell>{place.metroStation}</TableCell>
        ) : (
          <TableCell>
            <div>
              <span>-</span>
            </div>
          </TableCell>
        )}
        <TableCell>
          <button className={style.editBtn}>
            <img src={editIcon} alt="edit" />
          </button>
        </TableCell>
      </TableRow>
    ))}
  </>
);

export default PlaceTableBody;
