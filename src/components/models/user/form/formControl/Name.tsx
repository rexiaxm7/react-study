import {TextField,} from "@mui/material";
import {FC, useContext} from "react";
import {UserFormContext} from "../../../../../context/UserFormContext";

export const Name: FC = () => {
  const { name } = useContext(UserFormContext);

  return (
    <TextField
      label={"名前"}
      value={name}
      variant="standard"
    ></TextField>
  );
};
