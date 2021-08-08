import { Fragment } from "react";
import { Box, IconButton } from "@material-ui/core";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@material-ui/icons";
import useStyles from './IconsStyles'

const Icons = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box
        border={1}
        borderRadius={10}
        className={classes.icons}
      >
        <IconButton aria-label="phone" color="primary">
          <PhoneIcon />
        </IconButton>
      </Box>
      <Box
        border={1}
        borderRadius={10}
        className={classes.icons}
      >
        <IconButton aria-label="mail" color="primary">
          <MailIcon />
        </IconButton>
      </Box>
      <Box
        border={1}
        borderRadius={10}
        className={classes.icons}
      >
        <IconButton aria-label="linkedIn" color="primary">
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Box
        border={1}
        borderRadius={10}
        className={classes.icons}
      >
        <IconButton aria-label="github" color="primary">
          <GitHubIcon />
        </IconButton>
      </Box>
    </Fragment>
  );
};

export default Icons;
