import React, { useState } from "react";
import "./ImageCarousel.css";
import { Pagination, Typography } from "@mui/material";
import information from "../../data/information.json";
import GameCard from "../gameCard/GameCard";

function ImageCarousel() {
  const [page, setPage] = useState(1);

  const gameInformation = information.games.map((game) => ({
    title: game.title,
    description: game.description,
  }));

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="ImageCarousel_Container">
      <div className="ImageCarousel_Wrapper">
        <div className="Pagination_Container">
          <Typography variant="h6">SOME OF MY WORK</Typography>
          <Pagination
            count={gameInformation.length}
            defaultPage={1}
            page={page}
            onChange={handleChange}
            color="secondary"
            className="Pagination_Menu"
          />
        </div>
        <div className="Cards_Container">
          {gameInformation.map((gameInfo, index) => (
            <GameCard
              key={index}
              gameInfo={gameInfo}
              page={page}
              index={index + 1}
              cardType="compact"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
