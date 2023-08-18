import React, { useState } from "react";
import "./Header.css";
import {
  AppBar,
  Box,
  Button,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router";
import classNames from "classnames";
import WasdIcon from "../../icons/WasdIcon";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigateTo = useNavigate();
  const location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (direction) => {
    setAnchorEl(null);
    switch (direction) {
      case "Homepage":
        navigateTo(`/`);
        break;
      case "Games":
        navigateTo(`/Games`);
        break;
      case "Engines":
        navigateTo(`/Engines`);
        break;
      case "About":
        navigateTo(`/About`);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" className="appBar">
        <Toolbar className="Header">
          <IconButton
            size="large"
            aria-label="menu-button"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => navigateTo(`/`)}
            color="inherit"
            sx={{ padding: "0" }}
          >
            <WasdIcon className="wasdIcon" />
          </IconButton>
          <IconButton
            size="large"
            aria-label="menu-button"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            className="OpenMenu_Button"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
            className="Menu"
            id="menu-appbar"
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            marginThreshold={0}
            TransitionComponent={Fade}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 59, left: 0 }}
          >
            <MenuItem
              className={classNames("menuItem", {
                selected: location.pathname === "/",
              })}
              onClick={() => handleClose("Homepage")}
            >
              <Typography variant="h5">Homepage</Typography>
            </MenuItem>
            <MenuItem
              className={classNames("menuItem", {
                selected: location.pathname === "/Games",
              })}
              onClick={() => handleClose("Games")}
            >
              <Typography variant="h5">Games</Typography>
            </MenuItem>
            <MenuItem
              className={classNames("menuItem", {
                selected: location.pathname === "/Engines",
              })}
              onClick={() => handleClose("Engines")}
            >
              <Typography variant="h5">Engines</Typography>
            </MenuItem>
            <MenuItem
              className={classNames("menuItem", {
                selected: location.pathname === "/About",
              })}
              onClick={() => handleClose("About")}
            >
              <Typography variant="h5">About</Typography>
            </MenuItem>
          </Menu>
          <div className="Desktop_Menu">
            <Button variant="outlined"
              className={classNames("menuItem", {
                selected: location.pathname === "/",
              })}
              onClick={() => handleClose("Homepage")}
            >
              <Typography variant="h5">Homepage</Typography>
            </Button>
            <Button variant="outlined"
              className={classNames("menuItem", {
                selected: location.pathname === "/Games",
              })}
              onClick={() => handleClose("Games")}
            >
              <Typography variant="h5">Games</Typography>
            </Button>
            <Button variant="outlined"
              className={classNames("menuItem", {
                selected: location.pathname === "/Engines",
              })}
              onClick={() => handleClose("Engines")}
            >
              <Typography variant="h5">Engines</Typography>
            </Button>
            <Button variant="outlined"
              className={classNames("menuItem", {
                selected: location.pathname === "/About",
              })}
              onClick={() => handleClose("About")}
            >
              <Typography variant="h5">About</Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
