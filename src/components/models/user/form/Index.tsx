import {Stack} from "@mui/material";
import {FC} from "react";
import {
  UserAgeFormControl,
  UserGenderFormControl,
  UserHobbyFormControl,
  UserIdFormControl,
  UserJobFormControl,
  UserMailFormControl,
  UserNameFormControl,
} from "./formControl";

export const UserForm: FC = () => {
  return (
    <Stack spacing={3}>
      <UserIdFormControl> </UserIdFormControl>
      <UserMailFormControl> </UserMailFormControl>
      <UserNameFormControl> </UserNameFormControl>
      <UserAgeFormControl> </UserAgeFormControl>
      <UserJobFormControl> </UserJobFormControl>
      <UserGenderFormControl> </UserGenderFormControl>
      <UserHobbyFormControl> </UserHobbyFormControl>
    </Stack>
  );
};
