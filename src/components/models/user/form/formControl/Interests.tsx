import { Autocomplete, TextField } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../context/UserContext";

export const Interests: FC = () => {
  const { interests, setInterests } = useContext(UserContext);
  const onChangeInterests = (e: any, value: any) => {
    const values = value.map((option: any) => {
      if (typeof option === "string") return option;
      return option.value;
    });
    setInterests(values);
  };
  type InterestsOptionTypes = { label: string; value: string }[];
  const interestsOptions: InterestsOptionTypes = [
    {
      label: "サッカー",
      value: "サッカー",
    },
    {
      label: "プログラミング",
      value: "プログラミング",
    },
    {
      label: "音楽鑑賞",
      value: "音楽鑑賞",
    },
    {
      label: "ゲーム",
      value: "ゲーム",
    },
    {
      label: "クリケット",
      value: "クリケット",
    },
  ];

  return (
    <Autocomplete
      multiple
      freeSolo
      defaultValue={interests}
      id="tags-outlined"
      options={interestsOptions}
      onChange={onChangeInterests}
      autoSelect
      renderInput={(params) => (
        <TextField {...params} variant="standard" label="趣味" />
      )}
    />
  );
};
