import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey, orange } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          Mycolor: {
            main: orange[400],
          },
          Mainbg: {
            main: "#f6f9fc",
          },
          border: {
            main: "#ccc",
          },
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          Mycolor: {
            main: "#252b32",
          },
          Mainbg: {
            main: "#1D2021",
          },
          border: {
            main: "#636363",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[700],
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
