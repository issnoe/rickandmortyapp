import * as React from 'react';
import { DataGrid, GridCellParams, MuiEvent } from '@mui/x-data-grid';
import Router from 'next/router';
export default function TableBase({
  id,
  rows,
  columns,
  pageSize,
  rowsPerPageOptions,
}) {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        onCellClick={(
          params: GridCellParams,
          event: MuiEvent<React.MouseEvent>
        ) => {
          console.log(params);
          Router.push(`/${id}/${params.row.id}`);
        }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[rowsPerPageOptions]}
      />
    </div>
  );
}
