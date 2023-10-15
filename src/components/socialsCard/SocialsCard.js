import React from "react";
import "./SocialsCard.css";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Email,
  Facebook,
  GitHub,
  LinkedIn,
  Public,
  Twitter,
} from "@mui/icons-material";

function SocialsCard({ socialsInfo }) {
  return (
    <Card className="SocialsCard_Container">
      <CardContent className="SocialsCard_Wrapper">
        {socialsInfo.map((card) =>
          card.content.map((social, index) => (
            <div key={index} className="Socials_Container">
              {IconSelector(social.socialIcon)}
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                <a href={social.link} target="_blank" rel="noreferrer">
                  {social.linkLable}
                </a>
              </Typography>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

export default SocialsCard;

export const IconSelector = (socialIcon) => {
  switch (socialIcon) {
    case "Mail":
      return <Email className="Socials_Logo"/>;
    case "LinkedIn":
      return <LinkedIn className="Socials_Logo"/>;
    case "GitHub":
      return <GitHub className="Socials_Logo"/>;
    case "Twitter":
      return <i className="fa-brands fa-x-twitter Socials_Logo"></i>
    case "Facebook":
      return <Facebook className="Socials_Logo"/>;
    case "Itch.io":
      return <i className="fa-brands fa-itch-io Socials_Logo"></i>;
    case "Steam":
      return <i className="fa-brands fa-steam Socials_Logo"></i>;
    default:
      return <Public />;
  }
};
