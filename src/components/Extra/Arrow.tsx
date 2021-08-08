import Box from '@material-ui/core/Box'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useStyles from './ArrowStyles';

const Arrow = () => {

  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" my={8}>
      <ArrowDownwardIcon className={classes.icon} />
    </Box>
  )
}

export default Arrow
