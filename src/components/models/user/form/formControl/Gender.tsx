import {InputAdornment, InputBaseComponentProps, InputProps, TextField} from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";
import WcIcon from '@mui/icons-material/Wc';export const Gender: FC = () => {
  const { gender } = useContext(UserFormContext);
  const inputProps: Partial<InputProps> = {
      startAdornment: (
          <InputAdornment position="start">
              <WcIcon/>
          </InputAdornment>
      ),
  }

  return (
    <TextField
        InputProps={inputProps}
        label={"性別"}
        value={gender}
        variant="standard"
    />
  );
};
