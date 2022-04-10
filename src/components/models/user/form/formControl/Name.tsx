import { TextField } from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";

export const UserNameFormControl: FC = () => {
  const user = useContext(UserFormContext);
  return <TextField label={"名前"} value={user?.name}></TextField>;
};
