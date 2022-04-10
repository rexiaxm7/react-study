import { Card } from "@mui/material";
import { FC, useState } from "react";

import { UserDataTypes } from "../../../context/UserFormContext";
import { UserForm } from "../../models/user/form/Index";

export const UserCreate: FC = () => {
  return (
    <>
      <Card sx={{ height: "500px", p: 2 }}>
        <UserForm />
      </Card>
    </>
  );
};
