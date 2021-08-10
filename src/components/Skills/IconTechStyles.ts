import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    imgContainer: {
      overflow: "hidden",
      width: "100%",
      height: "100%",
      transition: "all .5s",
      paddingBottom: ".5em",
      "&:hover": {
        transform: "scale(1.2)",
      }
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    text: {
      color: `${theme.palette.primary.main}`,
      fontSize: "1.1em",
      textAlign: "center",
      fontWeight: 600,
      [theme.breakpoints.up("md")]: {
        fontSize: "1.3em",
      }
    }
  })
)

export default useStyles;