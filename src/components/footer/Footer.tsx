import { Box, Container, Grid, Typography } from "@material-ui/core";
import Icons from "../Extra/Icons";
import useStyles from "./FooterStyles";

const Footer = (): JSX.Element => {
  const classes = useStyles();
  
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" >
          <Grid item xs={12} sm={8} md={5} lg={5} xl={4} >
            <Box display="flex" justifyContent="space-evenly" >
              <Icons />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
            <Box textAlign="center" my={4}>
            <Typography variant="body2" color="secondary">Hecho por @aleoliva2409</Typography>
              <Typography variant="body2" color="secondary">© 2021 - Todos los derechos reservados.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
