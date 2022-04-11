import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  SelectChangeEvent,
} from "@mui/material";
import { RadioType } from "../Type";

type Props = {
  values: RadioType[];
  rajio: number;
  onChange: (event: SelectChangeEvent) => void;
};

export const RadioData: React.FC<Props> = ({ values, rajio, onChange }) => (
  <FormControl>
    <RadioGroup row value={rajio} onChange={onChange}>
      {values?.map((value) => (
        <FormControlLabel
          value={value.id}
          control={<Radio />}
          label={value.name}
        />
      ))}
    </RadioGroup>
  </FormControl>
);
