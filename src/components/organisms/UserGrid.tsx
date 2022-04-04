import { memo, VFC } from 'react';
import { DataGrid, GridColumns, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid';

import { UserRecord } from './../../types/view/UserRecord';

type Props = {
  users: UserRecord[];
};

const columns: GridColumns = [
  {
     field: 'id',
     headerName: 'ユーザーID',
     align: 'right',
     minWidth: 50,
     flex: 0.5,
     valueGetter: (param: GridValueGetterParams) => `${param.row.id}`,
  },
  {
    field: 'eMail',
    headerName: 'メールアドレス',
    align: 'left',
    minWidth: 200,
    flex: 2,
    valueGetter: (param: GridValueGetterParams) => `${param.row.mailAddress}`,
  },
  {
    field: 'age',
    headerName: '年齢',
    align: 'right',
    minWidth: 50,
    flex: 1,
    valueGetter: (param: GridValueGetterParams) => `${param.row.age}`,
  },
  {
    field: 'gender',
    headerName: '性別',
    align: 'left',
    type: 'number',
    minWidth: 80,
    flex: 1,
    renderCell: (param: GridRenderCellParams) => {
      if (param.row.genderImageURL === '')
      {
        return (
          <span>{param.row.genderName}</span>
        );
      }
      else
      {
        return (
          <span><img src={param.row.genderImageURL}></img> {param.row.genderName}</span>
        );
      }
    },
  },
  {
    field: 'job',
    headerName: '職業',
    align: 'left',
    minWidth: 150,
    flex: 1.5,
    valueGetter: (param: GridValueGetterParams) => `${param.row.job}`,
  },
  {
    field: 'hobby',
    headerName: '趣味',
    align: 'left',
    minWidth: 200,
    flex: 2,
    valueGetter: (param: GridValueGetterParams) => `${param.row.hobby}`,
  },
];

export const UserGrid: VFC<Props> = memo((props) => {
  return (
    <>
      <DataGrid
        rows={props.users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[20]}
        disableSelectionOnClick
        hideFooterSelectedRowCount  // 左下のページ表示を非表示
        hideFooterPagination        // 右下のページ表示を非表示
        hideFooter                  // フッターを非表示
      />
    </>
  );
});