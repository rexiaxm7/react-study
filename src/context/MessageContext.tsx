import React, { createContext, SetStateAction } from "react";

type MessageContextType = {
  message: string;
  setMessage: React.Dispatch<SetStateAction<string>>;
};
export const MessageContext = createContext<MessageContextType>({
  message: "",
  setMessage: () => {},
});
