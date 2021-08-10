import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    card: {
      overflow: "hidden",
      background: "inherit",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "22em",
        margin: "0 auto"
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "24em",
        margin: "0 auto"
      },
    },
    videoContainer: {
      overflow: "hidden",
      width: "100%",
      height: "13em",
      [theme.breakpoints.up("sm")]: {
        height: "15em"
      }
    },
    text: {
      [theme.breakpoints.up("sm")]: {
        height: "18em"
      },
      [theme.breakpoints.up("md")]: {
        height: "14em"
      }
    },
    btn: {
      fontSize: ".8em",
      background: `${theme.palette.secondary.main}`,
      color: `${theme.palette.primary.main}`,
      fontWeight: 600,
      "&:hover": {
        color: `${theme.palette.secondary.main}`,
        background: `${theme.palette.primary.main}`
      }
    },
    btnGit: {
      fontSize: ".8em",
      background: `${theme.palette.primary.main}`,
      color: `${theme.palette.secondary.main}`,
      fontWeight: 600,
      "&:hover": {
        color: `${theme.palette.primary.main}`,
        background: `${theme.palette.secondary.main}`
      }
    }
  })
))

export default useStyles;