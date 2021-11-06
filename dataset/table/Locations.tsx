import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 100 },
  { field: 'name', headerName: 'Name', width: 400 },
  { field: 'dimension', headerName: 'Dimension', width: 400 },
  {
    field: 'type',
    headerName: 'Type',
    width: 400,
  },
];
export default columns;
