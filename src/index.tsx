import { ChakraProvider } from "@chakra-ui/react";
import Head from "components/Head";
import BackgroundParticles from "components/Particles";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "system/global";
import theme from "system/theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Head />
        <GlobalStyle />
        <App />
        <BackgroundParticles />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
