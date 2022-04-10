import {InputAdornment, InputBaseComponentProps, InputProps, TextField} from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";
import BadgeIcon from '@mui/icons-material/Badge';
export const Id: FC = () => {
  const { id } = useContext(UserFormContext);
  const inputProps: Partial<InputProps> = {
    startAdornment: (
        <InputAdornment position="start">
          <BadgeIcon/>
        </InputAdornment>
    ),
  }
  return <TextField InputProps={inputProps} label={"ID"} value={id} variant="standard"></TextField>;
};
