import {
  InputAdornment,
  InputBaseComponentProps,
  InputProps,
  TextField,
} from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";
import MailIcon from "@mui/icons-material/Mail";
export const Mail: FC = () => {
  const { mail } = useContext(UserFormContext);
  const inputProps: Partial<InputProps> = {
    startAdornment: (
      <InputAdornment position="start">
        <MailIcon />
      </InputAdornment>
    ),
  };
  return (
    <TextField
      InputProps={inputProps}
      label={"メールアドレス"}
      value={mail}
      variant="standard"
    />
  );
};
