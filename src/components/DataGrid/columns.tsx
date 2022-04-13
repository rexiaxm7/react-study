import { Chip, Typography } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Data } from "../../Type";

const toGenderDisplay = (gender: number): string => {
  switch (gender) {
    case 1:
      return "男";
    case 2:
      return "女";
    default:
      return "不明";
  }
};

const columns: GridColDef[] = [
  { field: "user_id", headerName: "ID" },
  { field: "mail", headerName: "メールアドレス", width: 150 },
  { field: "age", headerName: "年齢" },
  { field: "job", headerName: "職業" },
  {
    field: "gender",
    headerName: "性別",
    renderCell: (params: GridRenderCellParams<number, Data>) => (
      <>
        <Typography>{toGenderDisplay(params.value)}</Typography>
      </>
    ),
  },
  {
    field: "interests",
    headerName: "趣味",
    width: 220,
    renderCell: (params: GridRenderCellParams<string[], Data>) => (
      <>
        {params.value.map((param: string) => (
          <Chip key={param} label={param} color="primary" />
        ))}
      </>
    ),
  },
];
export default columns;
