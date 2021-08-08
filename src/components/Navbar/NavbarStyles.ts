import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      background: "inherit",
    },
    wrapper: {
      maxWidth: 1440,
      width: "100%",
      margin: "0 auto"
    },
    menu: {
      flexGrow: 1,
      margin: 0,
      padding: 0,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "space-evenly"
      }
    },
    list: {
      listStyle: "none",
    },
    link: {
      display: "block",
      color: "#310A90",
      fontWeight: 550,
      fontSize: "16px",
      cursor: "pointer",
      padding: "8px",
      borderRadius: "5px",
      "&:hover": {
        color: "#fff",
        backgroundColor: "#310A90"
      },
      [theme.breakpoints.up("md")]: {
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "18px",
      }
    },
    btnContainer:{
      flexGrow: 1,
    },
    button: {
      fontWeight: 700
    }
  }),
);

export default useStyles;