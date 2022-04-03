import {Box, Button, Card, Grid} from "@mui/material";
import {SetStateAction, useContext, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {MessageContext} from "../../../context/MessageContext";
import {UserTable} from "../../models/UserTable";
import {useNavigate} from "react-router-dom";

export const UserList = () => {
  const { message, setMessage } = useContext(MessageContext);

  const navigate = useNavigate();

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
            <Grid container justifyContent="end" alignContent="">
              <Grid
                  item
                  my={2}
                  mr={2}
                  mb={1}
                  justifyContent={"center"}
                  alignContent={"center"}
              >
                <Button variant="outlined" onClick={()=>navigate("/users/create")}>追加</Button>
              </Grid>
            </Grid>
            <Box mx={2}>
              <UserTable rows={rows}/>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
