import { TextField } from "@mui/material";
import { FC, useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";

export const Name: FC = () => {
  const { name, setName } = useContext(UserContext);

  return (
    <TextField
      label={"名前"}
      value={name}
      variant="standard"
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
};
