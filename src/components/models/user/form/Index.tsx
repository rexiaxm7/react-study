import { Stack } from "@mui/material";
import { FC, useState } from "react";
import {
  defaultValue,
  UserDataTypes,
  UserFormContext,
} from "../../../../context/UserFormContext";
import { UserNameFormControl } from "./formControl/Name";
import { UserMailFormControl } from "./formControl/Mail";
import { UserAgeFormControl } from "./formControl/Age";

export const UserForm: FC = () => {
  const [user, _] = useState<UserDataTypes>(defaultValue);
  return (
    <Stack spacing={2}>
      <UserFormContext.Provider value={user}>
        <UserNameFormControl> </UserNameFormControl>
        <UserMailFormControl> </UserMailFormControl>
        <UserAgeFormControl> </UserAgeFormControl>
      </UserFormContext.Provider>
    </Stack>
  );
};
