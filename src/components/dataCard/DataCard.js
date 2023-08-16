import React from "react";
import "./DataCard.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { PortableText } from "@portabletext/react";
import components from "../../portableTextComponents";

function DataCard({ data }) {
  return (
    <Card className="DataCard_Container">
      <CardContent className="DataCard_Wrapper">
        <div className="DataCard_Header">
          <CardMedia
            className="DataCard_Logo"
            component="img"
            src={data.logo.asset.url}
            alt={data.name}
          />
          <div>
            <Typography
              variant="h4"
              sx={{ marginLeft: "0px", letterSpacing: "0px" }}
            >
              {data.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#A3B1BE" }}>
              {data.subtitle}
            </Typography>
            <Typography variant="body1" sx={{ color: "#A3B1BE" }}>
              {data.location}
            </Typography>
            <Typography variant="body1" sx={{ color: "#A3B1BE" }}>
              {data.date}
            </Typography>
          </div>
        </div>

        <PortableText value={data.contentText} components={components} />
      </CardContent>
    </Card>
  );
}

export default DataCard;
