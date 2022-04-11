import React, { createContext, Dispatch, SetStateAction } from "react";

type UserContextTypes = UserIdContextType &
  UserNameContextType &
  UserAgeContextType &
  UserMailContextType &
  UserJobContextType &
  UserGenderContextType &
  UserInterestsContextType;

export type UserIdType = number | null;
export type UserNameType = string;
export type UserAgeType = number | null;
export type UserMailType = string;
export type UserJobType = string;
export type UserGenderType = number | null;
export type UserInterestsType = string[];

export type UserIdContextType = {
  id: UserIdType;
  setId: Dispatch<SetStateAction<UserIdType>>;
};
export type UserNameContextType = {
  name: UserNameType;
  setName: Dispatch<SetStateAction<UserNameType>>;
};
export type UserAgeContextType = {
  age: UserAgeType;
  setAge: Dispatch<SetStateAction<UserAgeType>>;
};
export type UserMailContextType = {
  mail: UserMailType;
  setMail: Dispatch<SetStateAction<UserMailType>>;
};
export type UserJobContextType = {
  job: UserJobType;
  setJob: Dispatch<SetStateAction<UserJobType>>;
};
export type UserGenderContextType = {
  gender: UserGenderType;
  setGender: Dispatch<SetStateAction<UserGenderType>>;
};
export type UserInterestsContextType = {
  interests: UserInterestsType;
  setInterests: Dispatch<SetStateAction<UserInterestsType>>;
};
export const defaultUserId = {
  id: null,
  setId: () => {},
};
export const defaultUserName = {
  name: "",
  setName: () => {},
};
export const defaultUserAge = {
  age: null,
  setAge: () => {},
};
export const defaultUserMail = {
  mail: "",
  setMail: () => {},
};
export const defaultUserJob = {
  job: "",
  setJob: () => {},
};
export const defaultUserGender = {
  gender: null,
  setGender: () => {},
};
export const defaultUserInterests = {
  interests: [],
  setInterests: () => {},
};

const userDefaultValues = {
  ...defaultUserId,
  ...defaultUserName,
  ...defaultUserAge,
  ...defaultUserMail,
  ...defaultUserJob,
  ...defaultUserGender,
  ...defaultUserInterests,
};

export const UserContext = createContext<UserContextTypes>(userDefaultValues);
