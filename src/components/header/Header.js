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

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            <MenuItem className="menuItem selected" onClick={handleClose}>
              Homepage
            </MenuItem>
            <MenuItem className="menuItem" onClick={handleClose}>
              Games
            </MenuItem>
            <MenuItem className="menuItem" onClick={handleClose}>
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
