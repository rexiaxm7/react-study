import { memo, VFC } from 'react';
import { DataGrid, GridColumns, GridValueSetterParams, GridValueFormatterParams, GridColDef, GridActionsColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { UserRecord } from './../../types/view/UserRecord';
import { userInfo } from 'os';

type Props = {
  users: UserRecord[];
};

const columns: GridColumns = [
  {
     field: 'id',
     headerName: 'ユーザーID',
     width: 90,
     valueGetter: (param: GridValueGetterParams) => `${param.row.id}`,
  },
  {
    field: 'eMail',
    headerName: 'メールアドレス',
    width: 150,
    valueGetter: (param: GridValueGetterParams) => `${param.row.mailAddress}`,
  },
  {
    field: 'age',
    headerName: '年齢',
    width: 150,
    valueGetter: (param: GridValueGetterParams) => `${param.row.age}`,
  },
  {
    field: 'gender',
    headerName: '性別',
    type: 'number',
    width: 110,
    valueGetter: (param: GridValueGetterParams) => `${param.row.genderName}`,
  },
  {
    field: 'job',
    headerName: '職業',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
    valueGetter: (param: GridValueGetterParams) => `${param.row.job}`,
  },
  {
    field: 'hobby',
    headerName: '趣味',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
    valueGetter: (param: GridValueGetterParams) => `${param.row.hobby}`,
  },
];


export const UserGrid: VFC<Props> = memo((props) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}

        disableSelectionOnClick
      />
    </div>
  );
});