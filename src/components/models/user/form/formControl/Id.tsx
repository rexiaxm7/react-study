import {TextField,} from "@mui/material";
import {FC, useContext} from "react";
import {UserFormContext} from "../../../../../context/UserFormContext";

export const Id: FC = () => {
  const { id } = useContext(UserFormContext);

  return (
    <TextField
      label={"ID"}
      value={id}
      variant="standard"
    ></TextField>
  );
};
