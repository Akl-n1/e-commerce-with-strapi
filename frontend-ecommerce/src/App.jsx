import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./component/Header/Header1";
import Header2 from "./component/Header/Header2";
import Header3 from "./component/Header/Header3";
import Hero from "./component/Hero/Hero";
import Main from "./component/mainContent/Main";
import ScrollToTop from "./component/scroll/ScrollToTop";
import Footer from "./component/footer/Footer";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.Mainbg.main
          }
        >
          <Hero />
          <Main />
        </Box>
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
