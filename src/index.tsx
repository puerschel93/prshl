import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "system/global";
import theme from "system/theme";
import { ThemeProvider } from "styled-components";
import Head from "components/Head";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Head />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
