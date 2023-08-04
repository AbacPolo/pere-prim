import React from "react";
import "./GameCard.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import Anbara_BannerImage from "../../images/Andara.JPG";
import SpaceShock_BannerImage from "../../images/SpaceShock.JPG";
import SpaceTurtle_BannerImage from "../../images/SpaceTurtle.JPG";

const images = {
  Andara: {
    src: Anbara_BannerImage,
    alt: "Anbara_BannerImage",
  },
  "SpaceShock V2": {
    src: SpaceShock_BannerImage,
    alt: "SpaceShock_BannerImage",
  },
  SpaceTurtle: {
    src: SpaceTurtle_BannerImage,
    alt: "SpaceShock_BannerImage",
  },
};

function GameCard({ gameInfo, page, index, cardType }) {
  return (
    <Card
      className={classNames("hidden fade", {
        GameCard_Container: page === index,
      })}
    >
      <CardActionArea>
        <CardContent className="Card_Title">
          <Typography variant="h4">{gameInfo.title}</Typography>
        </CardContent>
        <CardMedia
          className="gameImage"
          component="img"
          src={images[gameInfo.title].src}
          alt={gameInfo.title}
        />
        {cardType !== "compact" ? (
          <CardContent> 
            <Typography variant="caption">{gameInfo.description}</Typography>
          </CardContent>
        ) : null}
      </CardActionArea>
    </Card>
  );
}

export default GameCard;
