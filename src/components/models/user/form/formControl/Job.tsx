import {InputAdornment, InputBaseComponentProps, InputProps, TextField} from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";
import WorkIcon from '@mui/icons-material/Work';
export const Job: FC = () => {
  const { job } = useContext(UserFormContext);
  const inputProps: Partial<InputProps>= {
    startAdornment: (
        <InputAdornment position="start">
          <WorkIcon/>
        </InputAdornment>
    ),
  }
  return <TextField InputProps={inputProps} label={"職業"} value={job} variant="standard"></TextField>;
};
