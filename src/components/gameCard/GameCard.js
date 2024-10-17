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
//import PopupState, { bindPopover, bindHover } from "material-ui-popup-state";
//import HoverPopover from "material-ui-popup-state/HoverPopover";
//import PreviewCard from "../previewCard/PreviewCard";

function GameCard({ gameInfo, page, index, cardType }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/Projects/${gameInfo.name}`);
    };

    if (gameInfo) {
        return (

            //<Card
            //    className={classNames("hidden fadeIn", {
            //        GameCard_Container: page === index,
            //    }, {
            //        GameCard_Container_Featured: cardType === "compact",
            //    })}
            //>
            //    <CardActionArea
            //        className="CardActionArea"
            //        onClick={handleCardClick}
            //    >
            //        <div className="Card_Header">
            //            <Typography
            //                variant="h4"
            //                className={classNames("Card_Title", {
            //                    Big_Title: cardType !== "compact",
            //                })}
            //            >
            //                {gameInfo.name}
            //            </Typography>
            //            <CardMedia
            //                className="gameImage"
            //                component="img"
            //                src={gameInfo.bannerImage.asset.url}
            //                alt={`${gameInfo.name} Banner`}
            //            />
            //            <span className="Card_Date">
            //                {gameInfo.project_Date}
            //            </span>
            //        </div>
            //        {cardType !== "compact" &&
            //            gameInfo.description !== "" &&
            //            gameInfo.description !== undefined ? (
            //            <CardContent className="Card_Description">
            //                <Typography variant="caption">
            //                    {gameInfo.description}
            //                </Typography>
            //            </CardContent>
            //        ) : null}
            //    </CardActionArea>
            //</Card>



            //<Card className={classNames({
            //    GameCard_Container: page === index
            //},{ GameCard_Container_OnGallery: cardType !== "featured", })}>

            //    {/*{cardType === "featured" ? (*/}
            //    {/*    <div></div>*/}
            //    {/*): null}*/}

            //    {gameInfo.cardImage?.asset?.url ? (
            //        <CardMedia className={classNames("hidden fadeIn", "CardBodyImage")}
            //            component="img"
            //            src={gameInfo.cardImage.asset.url}
            //            alt={`${gameInfo.name} Vertical`}
            //            onClick={handleCardClick}>

            //        </CardMedia>
            //    ) : (
            //        /*Else Try to load banner Image*/
            //        gameInfo.bannerImage?.asset?.url ? (
            //            <CardMedia className={classNames("hidden fadeIn", "CardBodyImage")} component="img"
            //                src={gameInfo.bannerImage.asset.url}
            //                alt={`${gameInfo.name} Vertical`}
            //                onClick={handleCardClick}>

            //            </CardMedia>
            //        ) : (
            //            <div className="CardBodyImage"></div>
            //        )
            //    )}
            //</Card>


            <Card className={classNames({
                GameCard_Container: page === index
            }, { GameCard_Container_OnGallery: cardType !== "featured", })}>
                <div className="Card_Bordy">
                    {gameInfo.cardImage?.asset?.url ? (
                        <CardMedia className={classNames("hidden fadeIn", "CardBodyImage")}
                            component="img"
                            src={gameInfo.cardImage.asset.url}
                            alt={`${gameInfo.name} Vertical`}>
                        </CardMedia>
                    ) : (
                        /*Else Try to load banner Image*/
                        gameInfo.bannerImage?.asset?.url ? (
                            <CardMedia className={classNames("hidden fadeIn", "CardBodyImage")} component="img"
                                src={gameInfo.bannerImage.asset.url}
                                alt={`${gameInfo.name} Vertical`}>
                            </CardMedia>
                        ) : (
                            <div className="CardBodyImage"></div>
                        )
                    )}

                    <div className="Card_Content" onClick={handleCardClick}>
                        <span className="Card_Date">
                            {gameInfo.project_Date}
                        </span>
                    </div>
                </div>
            </Card>

        );
    }

}

export default GameCard;
