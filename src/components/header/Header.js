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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router";
import classNames from "classnames";

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
      case "About":
        navigateTo(`/About`);
        break;
      default:
        navigateTo(`/`);
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
            onClick={handleMenu}
            color="inherit"
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
              Homepage
            </MenuItem>
            <MenuItem
              className={classNames("menuItem", {
                selected: location.pathname === "/Games",
              })}
              onClick={() => handleClose("Games")}
            >
              Games
            </MenuItem>
            <MenuItem
              className={classNames("menuItem", {
                selected: location.pathname === "/About",
              })}
              onClick={() => handleClose("About")}
            >
              About
            </MenuItem>
          </Menu>
          <Button variant="outlined" color="secondary">
            HIRE ME
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
