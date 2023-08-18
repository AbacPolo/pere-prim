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
import { useNavigate } from "react-router";

function GameCard({ gameInfo, page, index, cardType }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (gameInfo._type === "game") {
      navigate(`/Games/${gameInfo.name}`);
    } else if (gameInfo._type === "engine") {
      navigate(`/Engines/${gameInfo.name}`);
    }
  };

  if (gameInfo) {
    return (
      <Card
        className={classNames("hidden fade", {
          GameCard_Container: page === index,
        })}
      >
        <CardActionArea className="CardActionArea" onClick={handleCardClick}>
          <div className="Card_Header">
            <Typography
              variant="h4"
              className={classNames("Card_Title", {
                Big_Title: cardType !== "compact",
              })}
            >
              {gameInfo.name}
            </Typography>
            <CardMedia
              className="gameImage"
              component="img"
              src={gameInfo.bannerImage.asset.url}
              alt={`${gameInfo.name} Banner`}
            />
          </div>
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
}

export default GameCard;
