import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./components/pages/Users";
import { Container } from "@mui/material";
import { DefaultLayout } from "./components/layouts/DefaultLayout";

const rootElement = document.getElementById("root");
render(
  <Container>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Container>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
