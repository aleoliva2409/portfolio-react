import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    footer: {
      margin: "1em 0 0",
      [theme.breakpoints.up("sm")]: {
        margin: "4em 0 0"
      },
      [theme.breakpoints.up("lg")]: {
        margin: "6em 0 0"
      },
    },
  })
))

export default useStyles;