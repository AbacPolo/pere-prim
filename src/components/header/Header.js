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
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { getMainBanner } from "../mainBanner/mainBannerSlice";
import WasdIcon from "../../icons/WasdIcon";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigateTo = useNavigate();
  const location = useLocation();
  const pageBanner = useSelector(getMainBanner);
  console.log("pageBanner", pageBanner);

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
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" className="appBar">
        <Toolbar className="Header">
          <WasdIcon className="wasdIcon"/>
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
                selected: location.pathname === "/About",
              })}
              onClick={() => handleClose("About")}
            >
              <Typography variant="h5">About</Typography>
            </MenuItem>
          </Menu>
          {/* <Button
            variant="outlined"
            color="secondary"
            onClick={(e) => {
              window.open('mailto:PerePrimCarol@gmail.com');
            }}
          >
            HIRE ME
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
