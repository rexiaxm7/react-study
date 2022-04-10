import {
  InputAdornment,
  InputBaseComponentProps,
  InputProps,
  TextField,
} from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";
import UpdateIcon from "@mui/icons-material/Update";
export const Age: FC = () => {
  const { age } = useContext(UserFormContext);
  const inputProps: Partial<InputProps> = {
    startAdornment: (
      <InputAdornment position="start">
        <UpdateIcon />
      </InputAdornment>
    ),
  };
  return (
    <TextField
      InputProps={inputProps}
      label={"年齢"}
      value={age}
      variant="standard"
    ></TextField>
  );
};
