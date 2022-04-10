import {
  InputAdornment,
  InputBaseComponentProps,
  InputProps,
  TextField,
} from "@mui/material";
import { FC, useContext } from "react";
import { UserFormContext } from "../../../../../context/UserFormContext";
import BadgeIcon from "@mui/icons-material/Badge";
export const Id: FC = () => {
  const { id } = useContext(UserFormContext);

  return (
    <TextField
      label={"ID"}
      value={id}
      variant="standard"
    ></TextField>
  );
};
