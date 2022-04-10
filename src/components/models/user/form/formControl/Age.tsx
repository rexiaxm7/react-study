import { TextField } from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";

export const UserAgeFormControl: FC = () => {
  const user = useContext(UserFormContext);
  return <TextField label={"年齢"} value={user.age}></TextField>;
};
