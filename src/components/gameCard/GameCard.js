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
import { matchImage } from "../../data/loadImages";
import { useNavigate } from "react-router";

function GameCard({ gameInfo, page, index, cardType }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/Games/${gameInfo.title}`);
  };

  const image = matchImage(gameInfo.title, 'BannerImage')

  return (
    <Card
      className={classNames("hidden fade", {
        GameCard_Container: page === index,
      })}
    >
      <CardActionArea className="CardActionArea" onClick={handleCardClick}>
        <CardContent
          className={classNames("Card_Title", {
            Big_Title: cardType !== "compact",
          })}
        >
          <Typography variant="h4">{gameInfo.title}</Typography>
        </CardContent>
        <CardMedia
          className="gameImage"
          component="img"
          src={image.src}
          alt={gameInfo.title}
        />
        {cardType !== "compact" &&
        gameInfo.description !== "" &&
        gameInfo.description !== undefined ? (
          <CardContent className="Card_Description">
            <Typography variant="caption">{gameInfo.description}</Typography>
          </CardContent>
        ) : null}
      </CardActionArea>
    </Card>
  );
}

export default GameCard;
