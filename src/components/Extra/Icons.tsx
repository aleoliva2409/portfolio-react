import { Fragment } from "react";
import { Box, IconButton } from "@material-ui/core";
import {
  WhatsApp as WhatsAppIcon,
  Mail as MailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@material-ui/icons";
import useStyles from "./IconsStyles";

const Icons = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box border={1} borderRadius={10} className={classes.icons}>
        <IconButton aria-label="whatsapp" color="primary" href="https://wa.link/k02hqz" target="_blank">
          <WhatsAppIcon />
        </IconButton>
      </Box>
      <Box border={1} borderRadius={10} className={classes.icons}>
        <IconButton aria-label="mail" color="primary" href="mailto:alejandro.oliva2409@gmail.com" target="_blank">
          <MailIcon />
        </IconButton>
      </Box>
      <Box border={1} borderRadius={10} className={classes.icons}>
        <IconButton aria-label="linkedIn" color="primary" href="https://www.linkedin.com/in/aleoliva-dev/" target="_blank">
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Box border={1} borderRadius={10} className={classes.icons}>
        <IconButton aria-label="github" color="primary" href="https://github.com/aleoliva2409" target="_blank">
          <GitHubIcon />
        </IconButton>
      </Box>
    </Fragment>
  );
};

export default Icons;
