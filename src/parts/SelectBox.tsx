import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  text: string;
  values: string[];
  onChange: (event: SelectChangeEvent) => void;
  select: string;
};

export const SelectBox: React.FC<Props> = ({
  text,
  values,
  onChange,
  select,
}) => (
  <FormControl sx={{ m: 1, minWidth: 200 }}>
    <InputLabel>{text}</InputLabel>
    <Select value={select} label={text} onChange={onChange}>
      {values?.map((value) => (
        <MenuItem value={value}>{value}</MenuItem>
      ))}
    </Select>
  </FormControl>
);
