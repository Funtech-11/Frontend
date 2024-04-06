import { Table, TableHead, TableCell, TableRow } from '@mui/material';

const AdminPanelTable = () => {
  console.log('hello linter');

  const headers = [
    'НАЗВАНИЕ',
    'СТАТУС',
    'ТЕМАТИКА',
    'ДАТА',
    'ВРЕМЯ',
    'ТИП',
    'МОДЕРАЦИЯ',
    '',
  ];

  return (
    <Table sx={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default AdminPanelTable;
