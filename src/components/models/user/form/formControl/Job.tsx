import {
  FormControl,
  InputAdornment,
  InputBaseComponentProps, InputLabel,
  InputProps, MenuItem, Select,
  TextField,
} from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";
import WorkIcon from "@mui/icons-material/Work";
export const Job: FC = () => {
  const { job } = useContext(UserFormContext);


  const jobOptions = [
    {
      text: "エンジニア",
      value: "エンジニア",
    },
    {
      text: "花屋店員",
      value: "花屋店員",
    },
    {
      text: "プロ野球選手",
      value: "プロ野球選手",
    },
  ];
  return (
      <FormControl variant="standard" >
        <InputLabel id="age-label">職業</InputLabel>
        <Select
            labelId="age-label"
            id="age-select"
            value={job}
            // onChange={handleChange}
            label="Age"
            defaultValue={jobOptions[0].value}

        >
          {jobOptions.map((option) => (
              <MenuItem
                  value={option.value}
                  key={option.value}
              >
                {option.text}
              </MenuItem>)
          )}

        </Select>
      </FormControl>
  );
};
