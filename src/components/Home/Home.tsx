import { Box, Grid, Typography } from "@material-ui/core";
import useStyles from "./HomeStyles";
import Icons from "../Extra/Icons";

const Inicio = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      id="home"
      className={classes.container}
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={11} sm={5} md={4} lg={5} xl={5}>
        <Box className={classes.imgContainer}>
          <img
            src="https://media.discordapp.net/attachments/751947165143793807/873750585533407262/fondo.png"
            alt="img not found"
            className={classes.img}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={4} xl={4}>
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
          <Icons />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Inicio;
