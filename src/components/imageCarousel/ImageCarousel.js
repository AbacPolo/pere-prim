import React, { useState } from "react";
import "./ImageCarousel.css";
import { Pagination, Typography } from "@mui/material";
import information from "../../data/information.json";
import GameCard from "../gameCard/GameCard";

function ImageCarousel() {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="ImageCarousel_Container">
      <div className="ImageCarousel_Wrapper">
        <div className="Pagination_Container">
          <Typography variant="h6">SOME OF MY WORK</Typography>
          <Pagination
            count={information.games.length}
            defaultPage={1}
            page={page}
            onChange={handleChange}
            color="secondary"
            className="Pagination_Menu"
          />
        </div>
        <div className="Cards_Container">
          {information.games.map((gameInfo, index) => (
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
