import { Button, Card, Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { UserForm } from "../../models/user/form/Index";
import { useNavigate } from "react-router-dom";
import {
  defaultUserAge,
  defaultUserGender,
  defaultUserHobby,
  defaultUserId,
  defaultUserJob,
  defaultUserMail,
  defaultUserName,
  UserAgeType,
  UserContext,
  UserGenderType,
  UserHobbyType,
  UserIdType,
  UserJobType,
  UserMailType,
  UserNameType,
} from "../../../context/UserContext";
import {UserConfirmDialog} from "../../models/user/UserConfirmDialog";

export const UserCreate: FC = () => {
  const [id, setId] = useState<UserIdType>(defaultUserId.id);
  const [name, setName] = useState<UserNameType>(defaultUserName.name);
  const [age, setAge] = useState<UserAgeType>(defaultUserAge.age);
  const [mail, setMail] = useState<UserMailType>(defaultUserMail.mail);
  const [job, setJob] = useState<UserJobType>(defaultUserJob.job);
  const [gender, setGender] = useState<UserGenderType>(
    defaultUserGender.gender
  );
  const [hobby, setHobby] = useState<UserHobbyType>(defaultUserHobby.hobby);
  const userFormValue = {
    id,
    setId,
    name,
    setName,
    age,
    setAge,
    mail,
    setMail,
    job,
    setJob,
    gender,
    setGender,
    hobby,
    setHobby,
  };
  useEffect(() => {
    document.title = "ユーザー登録";
  }, []);
  const navigate = useNavigate();
  const openConfirmDialog = () => {
    handleClickOpen()
    // navigate("/users")
  }
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <UserContext.Provider value={userFormValue}>
        <Card sx={{ p: 2 }}>
          <Typography variant="h4" color="gray" sx={{ mb: 2 }}>
            ユーザー登録
          </Typography>

          <UserForm />
          <Grid container justifyContent="end" alignContent="">
            <Grid
              item
              my={2}
              mb={0}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Button variant="outlined" onClick={openConfirmDialog}>
                更新
              </Button>
              <UserConfirmDialog open={open} handleClose={handleClose}/>
            </Grid>
          </Grid>
        </Card>
      </UserContext.Provider>
    </>
  );
};
