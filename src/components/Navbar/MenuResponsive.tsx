import React, { Fragment, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-scroll";
import useStyles from "./MenuResponsiveStyles";

type MouseEvent = React.MouseEvent<HTMLButtonElement>;

const MenuResponsive = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const handleClick = (e: MouseEvent): void => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Box className={classes.menuIconContainer}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="primary"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon className={classes.icon} />
        </IconButton>
      </Box>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.item}>
          <Link to="home" onClick={handleClose}>
            Hola
          </Link>
        </MenuItem>
        <MenuItem className={classes.item}>
          <Link to="skills" onClick={handleClose}>
            Skills
          </Link>
        </MenuItem>
        <MenuItem className={classes.item}>
          <Link to="projects" onClick={handleClose}>
            Proyectos
          </Link>
        </MenuItem>
        <MenuItem className={classes.item} >
          <Link to="contact" onClick={handleClose}>
            Contacto
          </Link>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default MenuResponsive;
