import { Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import useStyles from "./TitleStyles"

interface ITitle {
  title:string
}

const Title = ({ title }:ITitle): JSX.Element => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography
        variant="h3"
        className={classes.title}
      >
        {title}
      </Typography>
    </Fragment>
  )
}

export default Title
