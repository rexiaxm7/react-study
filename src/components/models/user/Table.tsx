import {
  DataGrid,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import { FC } from "react";

type Props = {
  rows: any;
};
export const UserTable: FC<Props> = ({ rows }) => {
  const selectGender = (value: number) => {
    if (value === 1) return "男";
    if (value === 2) return "女";
    return "なし";
  };
  const columns = [
    { field: "id", headerName: "id", hide: true, flex: 1 },
    { field: "user_id", headerName: "ユーザー名", flex: 1 },
    { field: "mail", headerName: "メールアドレス", flex: 1 },
    { field: "age", headerName: "年齢", flex: 1 },
    {
      field: "gender",
      headerName: "性別",
      valueGetter: (params: GridValueGetterParams) =>
        selectGender(params.value),
      flex: 1,
    },
    { field: "job", headerName: "職業", flex: 1 },
    {
      field: "interests",
      headerName: "趣味",
      renderCell: (params: GridRenderCellParams) =>
        params.value.map((value: string) => <Chip label={value} />),
      flex: 1,
    },
  ];
  return <DataGrid autoHeight columns={columns} rows={rows}></DataGrid>;
};
