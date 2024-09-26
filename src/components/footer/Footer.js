import React from "react";
import "./Footer.css";
import { IconButton, Typography } from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

function Footer() {
  return (
    <div className="Footer_Container">
      <div className="Footer_Wrapper">
        <Typography
          variant="caption"
          sx={{ fontSize: "12px", lineHeight: "12px" }}
        >
          &copy; {(new Date().getFullYear())} Pere Prim
        </Typography>
        <div>
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", lineHeight: "12px", paddingRight: "8px" }}>
                      {/*Created by <a href="https://www.linkedin.com/in/abac-polo-p%C3%A9rez-23398212a/" target="_blank" ref="noreferrer"><b>Àbac Polo</b></a> & <b>Pere Prim</b>*/}
                      Created by <a href="https://www.linkedin.com/in/abac-polo-p%C3%A9rez-23398212a/" target="_blank" rel="noreferrer"><b>Àbac Polo</b></a> & <b>Pere Prim</b>
          </Typography>
          {/*<IconButton*/}
          {/*  color="footer"*/}
          {/*  aria-label="GitHub Link Abac Polo"*/}
          {/*  href="https://github.com/AbacPolo"*/}
          {/*  target="_blank"*/}
          {/*  rel="noreferrer"*/}
          {/*  size="small"*/}
          {/*>*/}
          {/*  <GitHub fontSize="10px" />*/}
          {/*</IconButton>*/}
          {/*<IconButton*/}
          {/*  color="footer"*/}
          {/*  aria-label="LinkedIn Link Abac Polo"*/}
          {/*  href="https://www.linkedin.com/in/abac-polo-p%C3%A9rez-23398212a/"*/}
          {/*  target="_blank"*/}
          {/*  rel="noreferrer"*/}
          {/*  size="small"*/}
          {/*>*/}
          {/*  <LinkedIn fontSize="10px" />*/}
          {/*</IconButton>*/}
          {/*<IconButton*/}
          {/*  color="footer"*/}
          {/*  aria-label="Maiil Link Abac Polo"*/}
          {/*  href="mailto:abak.93@gmail.com"*/}
          {/*  target="_blank"*/}
          {/*  rel="noreferrer"*/}
          {/*  size="small"*/}
          {/*>*/}
          {/*  <Mail fontSize="10px" />*/}
          {/*</IconButton>*/}
        </div>
      </div>
    </div>
  );
}

export default Footer;
