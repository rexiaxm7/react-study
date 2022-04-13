import { TextField } from "@mui/material";
import { FC, useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";

export const Mail: FC = () => {
  const { mail, setMail } = useContext(UserContext);

  return (
    <TextField
      label={"メールアドレス"}
      value={mail}
      variant="standard"
      onChange={(e) => {
        setMail(e.target.value);
      }}
    />
  );
};
