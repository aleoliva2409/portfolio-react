import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import html from "../../assets/img/html.png"
import css from "../../assets/img/css.png"
import js from "../../assets/img/js.png"
import ts from "../../assets/img/ts.png"
import bootstrap from "../../assets/img/bootstrap.png"
import react from "../../assets/img/react.png"
import redux from "../../assets/img/redux.png"
import materialUi from "../../assets/img/materialUi.png"
import git from "../../assets/img/git.png"
import node from "../../assets/img/node.png"
import express from "../../assets/img/express.png"
import sequelize from "../../assets/img/sequelize.png"
import postgresql from "../../assets/img/postgresql.png"
import mongo from "../../assets/img/mongo.png"
import useStyles from './IconTechStyles'
import Typography from '@material-ui/core/Typography'


const IconTech = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" >
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={html} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >HTML</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={css} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >CSS</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={bootstrap} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >Bootstrap</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={js} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >JavaScript</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={ts} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >TypeScript</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={react} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >React JS</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={redux} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >Redux</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={materialUi} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >Material UI</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={node} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >Node JS</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={express} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >Express JS</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={sequelize} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >Sequelize</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={postgresql} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >PostgreSQL</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={git} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >GIT</Typography>
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={2} xl={2} >
        <Box className={classes.imgContainer}>
          <img
            className={classes.img}
            src={mongo} alt="img not found" />
        </Box>
        <Typography variant="body1" className={classes.text} >Mongo DB</Typography>
      </Grid>
    </Grid>
  )
}

export default IconTech;
