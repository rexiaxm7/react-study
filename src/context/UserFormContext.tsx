import React, {createContext} from "react";

export type UserDataTypes = {
  id: number | null;
  name: string ;
  age: number | null;
  mail: string ;
  job: string ;
  gender: number | null;
  hobby: string ;
};

export const defaultValue = {
  id: null,
  name: "",
  age: null,
  mail: "",
  job: "",
  gender: null,
  hobby: "",
};
export const UserFormContext = createContext<UserDataTypes>(defaultValue);
