import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Themes";
import { Home } from "./sections/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <main
          className="main"
          style={{ position: "relative", height: "100vh" }}
        >
          <Home />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
