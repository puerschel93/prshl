import Main from "components/Main";
import { ThemeProvider } from "styled-components";
import theme from "system/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
