import { Button, Card, Grid, Typography } from "@mui/material";
import {FC, useContext, useEffect, useState} from "react";
import { UserForm } from "../../models/user/form/Index";
import { useNavigate } from "react-router-dom";
import {
  defaultUserAge,
  defaultUserGender,
  defaultUserInterests,
  defaultUserId,
  defaultUserJob,
  defaultUserMail,
  defaultUserName,
  UserAgeType,
  UserContext,
  UserGenderType,
  UserInterestsType,
  UserIdType,
  UserJobType,
  UserMailType,
  UserNameType,
} from "../../../context/UserContext";
import {UserConfirmDialog} from "../../models/user/UserConfirmDialog";
import axios from "axios";
import {MessageContext} from "../../../context/MessageContext";

export const UserCreate: FC = () => {
  const [id, setId] = useState<UserIdType>(defaultUserId.id);
  const [name, setName] = useState<UserNameType>(defaultUserName.name);
  const [age, setAge] = useState<UserAgeType>(defaultUserAge.age);
  const [mail, setMail] = useState<UserMailType>(defaultUserMail.mail);
  const [job, setJob] = useState<UserJobType>(defaultUserJob.job);
  const [gender, setGender] = useState<UserGenderType>(
    defaultUserGender.gender
  );
  const [interests, setInterests] = useState<UserInterestsType>(defaultUserInterests.interests);
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
    interests,
    setInterests,
  };
  const { setMessage } = useContext(MessageContext);
  useEffect(() => {
    document.title = "ユーザー登録";
  }, []);

  const navigate = useNavigate();
  const openConfirmDialog = () => {
    handleClickOpen()
  }
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = async () => {
    try {
      await axios.post("http://localhost:3001/users", {
        mail, age, gender, job, interests
      });
      setMessage({text:"ユーザーの登録が完了しました。",type:"success"});
      navigate("/users")
    } catch(e) {
      setMessage({text:"ユーザーの登録に失敗しました。",type:"error"})
    } finally {
      setOpen(false);
    }
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
              <UserConfirmDialog open={open} handleClose={handleClose} handleOK={handleOK}/>
            </Grid>
          </Grid>
        </Card>
      </UserContext.Provider>
    </>
  );
};
