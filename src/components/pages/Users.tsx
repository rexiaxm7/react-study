import { Box, Button, Card, Chip, Grid, Typography } from "@mui/material";
import {
  DataGrid,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { SetStateAction, useContext, useEffect, useState } from "react";
import axios from "axios";
import { MessageContext } from "../../context/MessageContext";

export const Users = () => {
  const { message, setMessage } = useContext(MessageContext);
  const initialColumns = [
    { field: "id", headerName: "id", hide: true, flex: 1 },
    { field: "user_id", headerName: "ユーザー名", flex: 1 },
    { field: "mail", headerName: "メールアドレス", flex: 1 },
    { field: "age", headerName: "年齢", flex: 1 },
    {
      field: "gender",
      headerName: "性別",
      valueGetter: (params: GridValueGetterParams) =>
        params.value === 1 ? "男" : "女",
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
  const [columns, setColumns] = useState(initialColumns);
  const [rows, setRows] = useState<SetStateAction<any>>([]);

  useEffect(() => {
    (async () => {
      const data = await axios
        .get("http://localhost:3001/users")
        .catch((e) => {});

      if (data === undefined) {
        setMessage("データの取得に失敗しました");
        return;
      }
      setRows(data.data);
    })();
  }, []);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        height={"100%"}
      >
        <Grid item xs={12}>
          <Card sx={{ height: "300px" }}>
            <Grid container justifyContent="end" alignContent="">
              <Grid
                item
                my={2}
                mr={2}
                mb={1}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <Button variant="outlined">追加</Button>
              </Grid>
            </Grid>
            <Grid></Grid>
            <Box mx={2}>
              <DataGrid autoHeight columns={columns} rows={rows}></DataGrid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
