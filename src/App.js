import Main from "components/Main";
import { ThemeProvider } from "styled-components";
import theme from "system/theme";
import Global from "system/style";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Main />
    </ThemeProvider>
  );
};

export default App;
