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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.wrapper}>
          <MenuResponsive />
          <ul className={classes.menu}>
            <li className={classes.list}>
              <Link to="home" smooth={true} className={classes.link}>
                Hola
              </Link>
            </li>
            <li className={classes.list}>
              <Link to="skills" smooth={true} className={classes.link}>
                Skills
              </Link>
            </li>
            <li className={classes.list}>
              <Link to="projects" smooth={true} className={classes.link}>
                Proyectos
              </Link>
            </li>
            <li className={classes.list}>
              <Link to="contact" smooth={true} className={classes.link}>
                Hablemos
              </Link>
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
              href="https://drive.google.com/uc?export=download&id=1TWW9T9I4m-n_VCqdjsd3ioVzIsSQjtvY"
              endIcon={<GetAppIcon />}
            >
              CURRÍCULUM
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.spacing} />
    </div>
  );
};

export default Navbar;
