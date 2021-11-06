import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AvatarBase from 'components/shared/Avatar';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 100 },
  {
    field: 'image',
    headerName: '👻',
    renderCell: (params: GridValueGetterParams) => {
      return <AvatarBase url={params.formattedValue} />;
    },
    width: 100,
    sortable: false,
  },
  { field: 'name', headerName: 'Name', width: 400 },
  { field: 'status', headerName: 'Status', width: 400 },
  {
    field: 'species',
    headerName: 'Species',
    width: 400,
  },
];
export default columns;
