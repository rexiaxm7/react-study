import { Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import {
  defaultValue,
  UserDataTypes,
  UserFormContext,
} from "../../../../context/UserFormContext";
import {
  UserAgeFormControl,
  UserGenderFormControl,
  UserHobbyFormControl,
  UserJobFormControl,
  UserIdFormControl,
  UserMailFormControl,
  UserNameFormControl,
} from "./formControl";

export const UserForm: FC = () => {
  const [user, _] = useState<UserDataTypes>(defaultValue);

  return (
    <Stack spacing={3}>
      <UserFormContext.Provider value={user}>
        <UserIdFormControl> </UserIdFormControl>
        <UserMailFormControl> </UserMailFormControl>
        <UserNameFormControl> </UserNameFormControl>
        <UserAgeFormControl> </UserAgeFormControl>
        <UserJobFormControl> </UserJobFormControl>
        <UserGenderFormControl> </UserGenderFormControl>
        <UserHobbyFormControl> </UserHobbyFormControl>
      </UserFormContext.Provider>
    </Stack>
  );
};
