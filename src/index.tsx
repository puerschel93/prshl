import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "system/global";
import theme from "system/theme";
import { ThemeProvider } from "styled-components";
import Head from "components/Head";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Head />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
