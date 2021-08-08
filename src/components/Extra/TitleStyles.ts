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
      marginLeft: "20px",
      display: "inline"
    }
  })
)

export default useStyles;
