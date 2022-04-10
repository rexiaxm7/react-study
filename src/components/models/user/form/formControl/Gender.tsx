import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,} from "@mui/material";

import {FC, useContext} from "react";
import {UserFormContext} from "../../../../../context/UserFormContext";

export const Gender: FC = () => {
  const { job } = useContext(UserFormContext);

  const genderOptions = [
    {
      text: "男",
      value: 1,
    },
    {
      text: "女",
      value: 2,
    },
    {
      text: "なし",
      value: 0,
    },
  ];

  return (
    <FormControl>
      <FormLabel id="gender-radio">性別</FormLabel>
      <RadioGroup
        row
        aria-labelledby="gender-radio"
        name="radio-group"
        defaultValue={1}
      >
        {genderOptions.map((option) => (
          <FormControlLabel
              key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.text}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
