import { Chip, Typography } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Data } from "../../Type";

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
        {params.value === 1 ? (
          <Typography>男</Typography>
        ) : params.value === 2 ? (
          <Typography>女</Typography>
        ) : (
          <Typography>不明</Typography>
        )}
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
          <Chip label={param} color="primary" />
        ))}
      </>
    ),
  },
];
export default columns;
