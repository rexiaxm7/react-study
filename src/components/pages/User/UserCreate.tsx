import {Button, Card, Grid, Typography} from "@mui/material";
import {FC, useEffect, useState} from "react";

import { UserDataTypes } from "../../../context/UserFormContext";
import { UserForm } from "../../models/user/form/Index";
import {useNavigate} from "react-router-dom";

export const UserCreate: FC = () => {
    useEffect(() => {
        document.title = "ユーザー登録"
    }, []);
    const navigate = useNavigate();
  return (
    <>
      <Card sx={{ p: 2 }}>
          <Typography variant="h4" color="gray" sx={{mb:2}}> ユーザー登録</Typography>

          <UserForm />
          <Grid container justifyContent="end" alignContent="">
              <Grid
                  item
                  my={2}
                  mb={0}
                  justifyContent={"center"}
                  alignContent={"center"}
              >
                  <Button
                      variant="outlined"
                      onClick={() => navigate("/users")}
                  >
                      更新
                  </Button>
              </Grid>
          </Grid>
      </Card>
    </>
  );
};
