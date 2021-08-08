import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      backgroundColor: `${theme.palette.primary.main}`,
      color: "#fff",
      boxShadow: "-6px 10px 0px -1px #fff",
      fontWeight: 600,
      fontSize: "2.2em",
      padding: ".2em"
    }
  })
)

export default useStyles;
