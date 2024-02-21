import React from "react";
import ReactDOM from "react-dom/client";
import Calendar from "../pages/Schedule.tsx";
import Provider from "./providers.tsx";
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
      <GlobalStyle />
      <Calendar />
    </Provider>
  </React.StrictMode>
);
