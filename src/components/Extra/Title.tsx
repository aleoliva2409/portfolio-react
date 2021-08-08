import React from 'react'
import Typography from '@material-ui/core/Typography';
import useStyles from "./TitleStyles"
import Box from '@material-ui/core/Box';

interface ITitle {
  title:string
}

const Title = ({ title }:ITitle): JSX.Element => {
  const classes = useStyles();

  return (
    <Box my={2}>
      <Typography
        variant="h3"
        className={classes.title}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default Title
