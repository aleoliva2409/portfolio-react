import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: "2.5em",
      [theme.breakpoints.up("sm")]: {
        paddingTop: "3em"
      }
    },
    imgContainer: {
      borderRadius: "50%",
      overflow: "hidden",
      height: "100%",
      width: "100%"
    },
    img: {
      height: "100%",
      width: "105%",
      objectFit: "cover"
    },
    
    name: {
      fontSize: "2.5em",
      fontWeight: 800,
      textAlign: "center",
      padding: ".3em 0"
    },
    subtitle: {
      fontSize: "1.6em",
      fontWeight: 750,
    },
    text: {
      padding: ".8em 0",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2em"
      }
    },
    icons: {
      backgroundColor: "#fff",
      border: `3px solid ${theme.palette.primary.main}`
    }
  }),
);

export default useStyles;