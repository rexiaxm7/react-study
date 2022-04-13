import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FC, useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";

export const Job: FC = () => {
  const { job ,setJob} = useContext(UserContext);
  const onChangeJobs = (e: any, value: any) => {
     if (typeof value === "string") return  setJob(value);
    setJob(value.value);
  };
  const jobOptions = [
    {
      label: "エンジニア",
      value: "エンジニア",
    },
    {
      label: "花屋店員",
      value: "花屋店員",
    },
    {
      label: "プロ野球選手",
      value: "プロ野球選手",
    },
  ];
  return (
    <Autocomplete
      disablePortal
      freeSolo
      options={jobOptions}
      noOptionsText={"候補が存在しません"}
      onChange={onChangeJobs}
      onInputChange={(event, newInputValue) => {
        setJob(newInputValue)
      }}
      renderInput={(params) => (
        <TextField {...params} label={"職業"} value={job} variant="standard"     />
      )}
    />
  );
};
