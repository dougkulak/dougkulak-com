import { createTheme } from "@mui/material";

// TODO: Theme Colors
// #212221
// #1181B2
// #DDEDF4
// #44449B

const brandColors = {
  dark: "#212221",
  primary: "#1181B2",
  light: "#DDEDF4",
  secondary: "#44449B",
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
    h4: { ...headingFontSettings, color: brandColors.primary },
    h5: { ...headingFontSettings },
    h6: { ...headingFontSettings },
  },
});

export default theme;
