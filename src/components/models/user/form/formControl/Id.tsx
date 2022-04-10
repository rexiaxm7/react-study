import { TextField } from "@mui/material";
import { FC, useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";

export const Id: FC = () => {
  const { id } = useContext(UserContext);

  return (
    <TextField
      label={"ID"}
      value={id}
      variant="standard"
      inputProps={{ readOnly: true }}
    ></TextField>
  );
};
