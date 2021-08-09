import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: "2.5em",
      [theme.breakpoints.up("sm")]: {
        paddingTop: "4em"
      }
    },
    imgContainer: {
      borderRadius: "15px",
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
      fontWeight: 700,
      textAlign: "center"
    },
    subtitle: {
      fontSize: "1.6em",
      fontWeight: 750
    },
    icons: {
      backgroundColor: "#fff",
      border: `3px solid ${theme.palette.primary.main}`
    }
  }),
);

export default useStyles;