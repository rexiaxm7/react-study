import { Autocomplete, InputProps, TextField } from "@mui/material";
import { FC, useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";

export const Age: FC = () => {
  const { age, setAge } = useContext(UserContext);
  const inputProps: Partial<InputProps> = {
    inputProps: { min: 0, max: 100 },
  };
  return (
    <TextField
      InputProps={inputProps}
      label={"年齢"}
      value={age}
      variant="standard"
      type={"number"}
      onChange={(e) => {
        setAge(Number(e.target.value));
      }}
    />
  );
};
