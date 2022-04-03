import {Card, Grid} from "@mui/material";
import {FC, SetStateAction, useContext, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {MessageContext} from "../../../context/MessageContext";

export const UserCreate:FC = () => {
  const { message, setMessage } = useContext(MessageContext);

  const [rows, setRows] = useState<SetStateAction<any>>([]);
  useEffect(() => {
    (async () => {
      const data = await axios
        .get<AxiosResponse>("http://localhost:3001/users")
        .catch((e) => {
          setMessage("データの取得に失敗しました");
        });
      setRows(data?.data);
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
          <Card sx={{height: "300px"}}>
            <Grid container justifyContent="end" alignContent=""></Grid>
          </Card>

        </Grid>
      </Grid>
    </>
  );
};
