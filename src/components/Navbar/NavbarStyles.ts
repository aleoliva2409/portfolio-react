import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // background: "inherit"
    },
    appBar: {
      background: "radial-gradient(circle, rgba(114,237,242,1) 0%, rgba(81,81,229,1) 100%)",
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
      fontWeight: 700,
      fontSize: "1.1em",
      cursor: "pointer",
      padding: ".4em",
      borderRadius: "5px",
      "&:hover": {
        color: "#fff",
        backgroundColor: "#310A90"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.2em",
      }
    },
    btnContainer:{
      flexGrow: 1,
    },
    button: {
      fontWeight: 700
    },
    spacing: theme.mixins.toolbar
  }),
);

export default useStyles;