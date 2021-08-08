import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: `${theme.palette.primary.main}`,
      fontSize: "10em"
    }
  }),
);

export default useStyles;