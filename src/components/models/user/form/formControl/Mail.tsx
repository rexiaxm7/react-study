import { TextField } from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";

export const UserMailFormControl: FC = () => {
  const user = useContext(UserFormContext);
  return <TextField label={"メールアドレス"} value={user.mail} />;
};
