import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuResponsive from "./MenuResponsive";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Link } from "react-scroll";
import useStyles from "./NavbarStyles";


const Navbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar} >
          <Toolbar className={classes.wrapper} >
            <MenuResponsive />
            <ul className={classes.menu}>
              <li className={classes.list}>
                <Link to="home" className={classes.link}>Hola</Link>
              </li>
              <li className={classes.list}>
                <Link to="skills" className={classes.link}>Skills</Link>
              </li>
              <li className={classes.list}>
                <Link to="projects" className={classes.link}>Proyectos</Link>
              </li>
              <li className={classes.list}>
                <Link to="contact" className={classes.link}>Hablemos</Link>
              </li>
            </ul>
            <Box
              className={classes.btnContainer}
              display="flex"
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<GetAppIcon />}
              >
                CURRÍCULUM
              </Button>
            </Box>
          </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
