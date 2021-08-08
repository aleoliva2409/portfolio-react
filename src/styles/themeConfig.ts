import { createTheme } from "@material-ui/core";

interface ITheme {}

const theme: ITheme = createTheme({
  palette: {
    primary: {
      light: "#45229b",
      main: "#310A90",
      dark: "#2c0981"
    }
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 10
  }
});

export default theme;