import { createTheme } from "@mui/material";

// TODO: Theme Colors
// #212221
// #1181B2
// #DDEDF4
// #44449B

const brandColors = {
  dark: "#090a0c",
  primary: "#303133",
  light: "#e0e0e0",
  secondary: "#b0b1b3",
};

const normalFontFamily = [
  '"Inter"',
  '"Helvetica"',
  '"Arial"',
  "sans-serif",
].join(",");

const headingFontSettings = {
  fontFamily: ['"Faustina"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  fontWeight: 700,
};

const theme = createTheme({
  brandColors: brandColors,
  palette: {
    primary: {
      main: brandColors.primary,
    },
    secondary: {
      main: brandColors.light,
    },
  },
  typography: {
    fontFamily: normalFontFamily,
    h1: { ...headingFontSettings },
    h2: { ...headingFontSettings },
    h3: { ...headingFontSettings },
    h4: {
      ...headingFontSettings,
      color: brandColors.primary,
    },
    h5: { ...headingFontSettings, color: brandColors.primary },
    h6: { ...headingFontSettings },
  },
});

export default theme;
