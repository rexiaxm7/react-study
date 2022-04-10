import {TextField,} from "@mui/material";
import {FC, useContext} from "react";
import {UserFormContext} from "../../../../../context/UserFormContext";

export const Hobby: FC = () => {
  const { hobby } = useContext(UserFormContext);

  return (
    <TextField
      label={"趣味"}
      value={hobby}
      variant="standard"
    ></TextField>
  );
};
