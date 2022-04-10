import {Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField,} from "@mui/material";
import {FC, useContext} from "react";
import { UserFormContext} from "../../../../../context/UserFormContext";

export const Job: FC = () => {
  const { job } = useContext(UserFormContext);
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
              options={jobOptions}
              noOptionsText={"候補が存在しません"}
              renderInput={(params) =>
                  <TextField
                      {...params}
                      label={"職業"}
                      value={job}
                      variant="standard"
                  />}
          />
  );
};
