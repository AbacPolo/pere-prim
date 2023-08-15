import React, { useState } from "react";
import "./ImageCarousel.css";
import { Pagination, Skeleton, Typography } from "@mui/material";
import GameCard from "../gameCard/GameCard";
import { useSelector } from "react-redux";
import {
  getAllGames,
  getgamesAreLoaded,
} from "../../routes/gamePage/gamePageSlice";

function ImageCarousel() {
  const [page, setPage] = useState(1);
  const allGames = useSelector(getAllGames);
  const gamesAreLoaded = useSelector(getgamesAreLoaded);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="ImageCarousel_Container">
      <div className="ImageCarousel_Wrapper">
        <div className="Pagination_Container">
          <Typography variant="h6">SOME OF MY WORK</Typography>
          <Pagination
            count={allGames.length}
            defaultPage={1}
            page={page}
            onChange={handleChange}
            color="secondary"
            className="Pagination_Menu"
          />
        </div>
        {gamesAreLoaded === false ? (
          <div className="Cards_Container">
            <Skeleton variant="rectangular" width={250} height={190} />
          </div>
        ) : (
          <div className="Cards_Container">
            {allGames.map((gameInfo, index) => (
              <GameCard
                key={index}
                gameInfo={gameInfo}
                page={page}
                index={index + 1}
                cardType="compact"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageCarousel;
