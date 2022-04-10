import {Box, Button, Card, Grid} from "@mui/material";
import {SetStateAction, useContext, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {MessageContext} from "../../../context/MessageContext";
import {UserTable} from "../../models/user/Table";
import {useNavigate} from "react-router-dom";

export const UserList = () => {
  const { setMessage } = useContext(MessageContext);

  const navigate = useNavigate();

  const [rows, setRows] = useState<SetStateAction<any>>([]);

  useEffect(() => {
    document.title = "ユーザー一覧";
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get<AxiosResponse>(
          "http://localhost:3001/users"
        );
        setRows(data?.data);
      } catch {
        setMessage("データの取得に失敗しました");
        setRows([]);
      }
    })();
  }, []);

  return (
    <>
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
            <Button
              variant="outlined"
              onClick={() => navigate("/users/create")}
            >
              追加
            </Button>
          </Grid>
        </Grid>
        <Box mx={2}>
          <UserTable rows={rows} />
        </Box>
      </Card>
    </>
  );
};
