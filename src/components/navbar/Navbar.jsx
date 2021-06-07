import React, { useState, Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: { flexGrow: 1 },
  },
  btn: {
    border: "transparent",
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    color: "white",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { history } = props;

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Redux-Hooks
        </Typography>

        {isMobile ? (
          <Fragment>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleClose("/")}>Home</MenuItem>
              <MenuItem onClick={() => handleClose("/comments")}>
                Comments
              </MenuItem>
              <MenuItem onClick={() => handleClose("/about")}>About</MenuItem>
            </Menu>
          </Fragment>
        ) : (
          <Fragment>
            <Button
              className={classes.btn}
              onClick={() => handleClose("/")}
              variant="outlined"
            >
              Home
            </Button>
            <Button
              className={classes.btn}
              onClick={() => handleClose("/comments")}
              variant="outlined"
            >
              Comments
            </Button>
            <Button
              className={classes.btn}
              onClick={() => handleClose("/about")}
              variant="outlined"
            >
              About
            </Button>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default withRouter(Navbar);
