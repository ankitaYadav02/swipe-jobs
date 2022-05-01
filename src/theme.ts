import { createTheme } from "@mui/material/styles";
import { appHeaderHeight } from "Constant/constant";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: appHeaderHeight,
        },
      },
    },
  },
});

export default theme;
