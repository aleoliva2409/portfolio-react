import { Box, Grid, Typography, IconButton } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import useStyles from "./HomeStyles";

const Inicio = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={1}>
      <Grid item xs={11} sm={5} md={4} lg={5} xl={6} >
        <Box className={classes.imgContainer}>
          <img
            src="https://media.discordapp.net/attachments/751947165143793807/873750585533407262/fondo.png"
            alt="img not found"
            className={classes.img}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={4} xl={4} >
        <Box mt={2}>
          <Typography variant="h5" color="primary" className={classes.subtitle}>
            ¡Hola a todos!
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant="h4" color="primary" className={classes.name}>
            Soy Alejandro
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant="body2" color="primary">
            Full Stack Developer que busca desafios, implementar nuevas ideas,
            aprender nuevas tecnologías y crecer profesionalmente.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-evenly" my={4}>
          <Box border={1} borderRadius={10} borderColor="primary.main" className={classes.icons}>
            <IconButton aria-label="" color="primary">
              <PhoneIcon />
            </IconButton>
          </Box>
          <Box border={1} borderRadius={10} borderColor="primary.main" className={classes.icons}>
            <IconButton aria-label="" color="primary">
              <MailIcon />
            </IconButton>
          </Box>
          <Box border={1} borderRadius={10} borderColor="primary.main" className={classes.icons}>
            <IconButton aria-label="" color="primary">
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Box border={1} borderRadius={10} borderColor="primary.main" className={classes.icons}>
            <IconButton aria-label="" color="primary">
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Inicio;
