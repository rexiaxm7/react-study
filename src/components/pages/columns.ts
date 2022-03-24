//import EditIcon from "@mui/icons-material/Edit";

const genderTranslation = (params: { row: { gender: number } }) => {
  if (params.row.gender === 0) {
    return "なし";
  }
  if (params.row.gender === 1) {
    return "男";
  }
  if (params.row.gender === 2) {
    return "女";
  }
};

export const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user_id",
    headerName: "ユーザーID",
    width: 150,
    hide: true,
  },
  {
    field: "mail",
    headerName: "メールアドレス",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "年齢",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "gender",
    headerName: "性別",
    width: 150,
    editable: true,
    valueGetter: genderTranslation,
  },
  {
    field: "job",
    headerName: "職業",
    width: 200,
    editable: true,
  },
  {
    field: "interests",
    headerName: "趣味",
    width: 300,
    editable: true,
  },
  {
    field: "actions",
    headerName: "操作",
    width: 200,
  },
];
