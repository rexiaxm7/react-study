import {TextField,} from "@mui/material";
import {FC, useContext} from "react";
import {UserFormContext} from "../../../../../context/UserFormContext";

export const Mail: FC = () => {
  const { mail } = useContext(UserFormContext);

  return (
    <TextField
      label={"メールアドレス"}
      value={mail}
      variant="standard"
    />
  );
};
