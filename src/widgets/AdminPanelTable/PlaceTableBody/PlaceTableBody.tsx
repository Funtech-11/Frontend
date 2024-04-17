import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import editIcon from 'src/assets/images/icons/admin/edit.svg';

import style from './PlaceTableBody.module.scss';
import { TPlace } from '../types/types';

interface IPlaceTableBodyProps {
  placesData: TPlace[];
}

const PlaceTableBody: FC<IPlaceTableBodyProps> = ({ placesData }) => {
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
      {placesData.map(place => (
        <TableRow key={place.id}>
          <TableCell padding="checkbox" style={commonCellStyle}>
            <Checkbox />
          </TableCell>
          <TableCell style={commonCellStyle}>{place.name}</TableCell>
          <TableCell style={commonCellStyle}>{place.adress}</TableCell>
          <TableCell style={commonCellStyle}>{place.city}</TableCell>
          {place.metroStation ? (
            <TableCell style={commonCellStyle}>{place.metroStation}</TableCell>
          ) : (
            <TableCell style={commonCellStyle}>
              <div>
                <span>-</span>
              </div>
            </TableCell>
          )}
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

export default PlaceTableBody;
