import { Box, Grid, Typography } from "@material-ui/core";
import useStyles from "./HomeStyles";
import Icons from "../Extra/Icons";
import Me from "../../assets/img/me.png";

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
      <Grid item xs={9} sm={5} md={4} lg={5} xl={5}>
        <Box className={classes.imgContainer}>
          <img src={Me} alt="img not found" className={classes.img} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={4} xl={5}>
        <Typography variant="h5" color="primary" className={classes.subtitle}>
          ¡Hola a todos!
        </Typography>
        <Typography variant="h4" color="primary" className={classes.name}>
          Soy Alejandro
        </Typography>
        <Typography variant="body2" color="primary" className={classes.text}>
          Tengo 28 años, soy Full Stack Developer con 3 años de experencia, actualmente trabajando en
          Banco Galicia, uno de las bancos mas importantes de Argentina. Si quieres contactarme, te dejo mis redes aquí abajo ↓
        </Typography>
        <Box display="flex" justifyContent="space-evenly" py={2}>
          <Icons />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Inicio;
