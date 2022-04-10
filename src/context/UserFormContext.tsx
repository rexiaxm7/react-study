import React, { createContext, Dispatch, SetStateAction } from "react";

export type UserDataTypes = {
  name: string | null;
  age: number | null;
  mail: string | null;
  job: string | null;
  gender: number | null;
  hobby: string | null;
};

export const defaultValue = {
  name: null,
  age: null,
  mail: null,
  job: null,
  gender: null,
  hobby: null,
};
export const UserFormContext = createContext<UserDataTypes>(defaultValue);
