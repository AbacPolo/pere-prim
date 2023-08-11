import React from "react";
import "./SocialsCard.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { PortableText } from "@portabletext/react";
import components from "../../portableTextComponents";

function SocialsCard({ socialsInfo }) {

  console.log('socialsInfo',socialsInfo);
  return (
    <Card className="SocialsCard_Container">
      <CardContent className="SocialsCard_Wrapper">
        {socialsInfo.map((card) =>
          card.content.map((social, index) => (
            <div key={index} className="Socials_Container">
              <CardMedia
                className="Socials_Logo"
                component="img"
                src={social.logo.asset.url}
                alt="Social Logo"
              />
              <Typography variant="body1" sx={{fontWeight: 500}}>
                <PortableText value={social.name} components={components} />
              </Typography>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

export default SocialsCard;
