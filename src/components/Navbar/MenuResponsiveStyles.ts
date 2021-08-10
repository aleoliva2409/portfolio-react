import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuIconContainer: {
      flexGrow: 1,
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    menuButton: {
      display: "flex",
      justifyContent: "flex-start",
    },
    icon: {
      fontSize: "1.3em",
    },
    item: {
      color: "#310A90",
      fontWeight: 700
    },
  }),
);

export default useStyles;