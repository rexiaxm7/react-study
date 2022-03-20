import React, {createContext, SetStateAction, useContext, useState} from "react";
import "./App.css";
import { Users } from "./components/pages/Users";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageContext } from "./context/MessageContext";


const App = () => {

  const [message,setMessage] = useState("")
  const value = {
    message,
    setMessage,
  };


  return (
    <Container>
      <MessageContext.Provider value={value}>
        <Routes>
          <Route index element={<Users />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </MessageContext.Provider>
    </Container>
  );
};

export default App;
