import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      backgroundColor: `${theme.palette.primary.main}`,
      color: "#fff",
      boxShadow: "-5px 5px 0px -1px #fff",
      fontWeight: 600,
      fontSize: "2.2em",
      padding: ".2em",
      marginLeft: ".5em",
      display: "inline",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        textAlign: "center",
        margin: "0 auto",
        width: "80%"
      },
      [theme.breakpoints.up("md")]: {
        width: "75%"
      },
      [theme.breakpoints.up("lg")]: {
        width: "65%"
      },
      [theme.breakpoints.up("xl")]: {
        width: "60%"
      }
    }
  })
)

export default useStyles;
