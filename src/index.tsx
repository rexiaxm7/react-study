import React from "react";
import /*ReactDOM,*/ { render } from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { Test } from "./components/pages/Test";
import { UserList } from "./components/pages/UserList";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="test" element={<Test />} />
        <Route path="userList" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
