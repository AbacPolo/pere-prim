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
import PopupState, { bindPopover, bindHover } from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import PreviewCard from "../previewCard/PreviewCard";

function GameCard({ gameInfo, page, index, cardType }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/Projects/${gameInfo.name}`);
    // if (gameInfo._type === "game") {
    //   navigate(`/Projects/${gameInfo.name}`);
    // } else if (gameInfo._type === "engine") {
    //   navigate(`/Engines/${gameInfo.name}`);
    // }
  };

  // console.log("gameInfo", gameInfo);

  if (gameInfo) {
    return (
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <Card
            className={classNames("hidden fadeIn", {
              GameCard_Container: page === index,
            })}
          >
            <CardActionArea
              className="CardActionArea"
              onClick={handleCardClick}
              {...bindHover(popupState)}
            >
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
                  <Typography variant="caption">
                    {gameInfo.description}
                  </Typography>
                </CardContent>
              ) : null}
            </CardActionArea>
            {gameInfo.preview && (
              <HoverPopover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "left",
                }}
                className="Popover_Container"
              >
                <PreviewCard key={index} previewinfo={gameInfo.preview} />
              </HoverPopover>
            )}
          </Card>
        )}
      </PopupState>
    );
  }
}

export default GameCard;
