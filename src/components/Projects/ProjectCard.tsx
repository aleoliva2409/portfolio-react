import { Box, Grid, Typography, Button, Paper } from "@material-ui/core";
import ReactPlayer from "react-player";
import GitHubIcon from "@material-ui/icons/GitHub";
import useStyles from "./ProjectCardStyles";

const ProjectCard = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={11} sm={6} md={5} lg={4} xl={4} >
        <Paper elevation={3} className={classes.card}>
          <Box className={classes.videoContainer}>
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              url="https://www.youtube.com/watch?v=pNHBMBByTuw"
            />
          </Box>
          <Box p={2} className={classes.text} >
            <Typography variant="body2" color="secondary">
              Desarrollo de una aplicación Web en la cual se puede ver
              información de distintos paises utilizando una API externa y a
              partir de ella poder buscar paises, filtrarlos/ordenarlos, crear
              actividades turísticas y mas funcionalidades.
            </Typography>
            <Typography variant="body2" color="secondary">
              Desarrollado con:
            </Typography>
            <Typography variant="body2" color="secondary">
              React JS, Node JS, Express JS, Sequelize, PostgreSQL
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-evenly" py={2}>
            <Button
              variant="contained"
              className={classes.btnGit}
              startIcon={<GitHubIcon />}
            >
              Código
            </Button>
            <Button variant="contained" className={classes.btn}>
              Web
            </Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={11} sm={6} md={5} lg={4} xl={4} >
        <Paper elevation={3} className={classes.card}>
          <Box className={classes.videoContainer}>
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              url="https://www.youtube.com/watch?v=-H7wvkQIUQ8"
            />
          </Box>
          <Box p={2} className={classes.text} >
            <Typography variant="body2" color="secondary">
              Desarrollo de un ecommerce: con catálogo de productos, filtro por
              categorías, barra de búsqueda, login de usuarios, carrito de
              compras, checkout de la orden y pago con Mercadopago, dashboard de
              admin para carga y edición de productos.
            </Typography>
            <Typography variant="body2" color="secondary">
              Desarrollado con:
            </Typography>
            <Typography variant="body2" color="secondary">
              React JS, Redux, Material UI, Node JS, Express JS, Sequelize,
              PostgreSQL, JWT
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-evenly" py={2}>
            <Button
              variant="contained"
              className={classes.btnGit}
              startIcon={<GitHubIcon />}
            >
              Código
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
