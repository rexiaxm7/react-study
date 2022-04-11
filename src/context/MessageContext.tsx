import React, { createContext, SetStateAction } from "react";

export type MessageTypes = {
  text: string,
  type: "info"|"warning"|"success"|"error"
} | undefined
type MessageContextType = {
  message: MessageTypes;
  setMessage: React.Dispatch<SetStateAction<MessageTypes>>;
};
export const MessageContext = createContext<MessageContextType>({
  message: undefined,
  setMessage: () => {},
});
