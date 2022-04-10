import { Autocomplete, TextField } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../context/UserContext";

export const Hobby: FC = () => {
  const { hobby, setHobby } = useContext(UserContext);
  const onChangeHobby = (e: any, value: any) => {
    const values = value.map((option: any) => {
      if (typeof option === "string") return option;
      return option.value;
    });
    setHobby(values);
  };
  type HobbyOptionTypes = { label: string; value: string }[];
  const hobbyOptions: HobbyOptionTypes = [
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
      defaultValue={hobby}
      id="tags-outlined"
      options={hobbyOptions}
      onChange={onChangeHobby}
      autoSelect
      renderInput={(params) => (
        <TextField {...params} variant="standard" label="趣味" />
      )}
    />
  );
};
