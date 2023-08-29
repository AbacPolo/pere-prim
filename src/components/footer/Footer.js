import React from "react";
import "./Footer.css";
import { IconButton, Typography } from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

function Footer() {
  return (
    <div className="Footer_Container">
      <div className="Footer_Wrapper">
        <Typography variant="caption" sx={{fontSize: "12px", lineHeight: "12px"}}>
          Created by <b>Àbac Polo</b>
        </Typography>
        <div>
          <IconButton
            color="footer"
            aria-label="GitHub Link Abac Polo"
            href="https://github.com/AbacPolo"
            target="_blank"
            rel="noreferrer"
            size="small"
          >
            <GitHub fontSize="10px" />
          </IconButton>
          <IconButton
            color="footer"
            aria-label="LinkedIn Link Abac Polo"
            href="https://github.com/AbacPolo"
            target="_blank"
            rel="noreferrer"
            size="small"
          >
            <LinkedIn fontSize="10px" />
          </IconButton>
          <IconButton
            color="footer"
            aria-label="Maiil Link Abac Polo"
            href="mailto:abak.93@gmail.com"
            target="_blank"
            rel="noreferrer"
            size="small"
          >
            <Mail fontSize="10px" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Footer;
