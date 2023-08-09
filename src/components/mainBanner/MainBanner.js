import React from "react";
import "./MainBanner.css";
import profileImage from "../../images/Profile_Image.jpg";
import information from "../../data/information.json";
import { IconButton, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

function MainBanner() {
  return (
    <div className="MainBanner_Container">
      <div className="MainBanner_Wrapper">
        <img className="profile_Image" src={profileImage} alt="Profile"></img>
        <div className="Text_Container">
          <Typography variant="h1">
            {information.banner.name}
          </Typography>
          <Typography variant="h3">GAME DEVELOPER</Typography>
          <div className="Socials_Container">
            <IconButton color="secondary" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton color="secondary" aria-label="Email">
              <Email />
            </IconButton>
            <IconButton color="secondary" aria-label="GitHub">
              <GitHub />
            </IconButton>
            <IconButton color="secondary" aria-label="Twitter">
              <Twitter />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
