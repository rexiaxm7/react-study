import {Autocomplete, InputProps, TextField,} from "@mui/material";
import {FC, useContext} from "react";
import {UserFormContext} from "../../../../../context/UserFormContext";

export const Age: FC = () => {
  const { age } = useContext(UserFormContext);
  const inputProps: Partial<InputProps> = {
    inputProps: { min: 0, max: 100 }
  };
  return (
    <TextField
    InputProps={inputProps}
    label={"年齢"}
    value={age}
    variant="standard"
    type={"number"}
    />
  );
};
