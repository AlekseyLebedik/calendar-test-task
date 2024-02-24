import React from "react";
import ReactDOM from "react-dom/client";
import Schedule from "../pages/Schedule.tsx";
import Provider from "./providers.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
 }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={() => <Schedule />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
