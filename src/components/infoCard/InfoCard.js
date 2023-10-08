import React from "react";
import "./InfoCard.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Skeleton } from "@mui/material";

function InfoCard({ info }) {
  // console.log("info", info);
  return (
    <Card className="InfoCard_Container">
      <CardContent className="InfoCard_Wrapper">
        <div className="InfoCard_Header">
          {info.image !== "" ? (
            <CardMedia className="InfoCard_Image"></CardMedia>
          ) : (
            <Skeleton variant="rectangular" width={52} height={52} animation={false} className="InfoCard_Image"/>
          )}

          <div className="InfoCard_Text">
            <Typography variant="h4" sx={{letterSpacing: "0px"}}>{info.cardTitle}</Typography>
            <Typography variant="h6">{info.cardSubtitle}</Typography>
            <Typography variant="h6">{info.date}</Typography>
          </div>
        </div>
        <div>
          <Typography variant="body1">{info.cardContent}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
