import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icons: {
      backgroundColor: "#fff",
      border: `3px solid ${theme.palette.primary.main}`
    }
  }),
);

export default useStyles;