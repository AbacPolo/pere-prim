import React, { useState } from "react";
import "./ImageCarousel.css";
import { Pagination, Skeleton, Typography } from "@mui/material";
import GameCard from "../gameCard/GameCard";
import { useSelector } from "react-redux";
import {
  getAllGames,
  getgamesAreLoaded,
} from "../../routes/gamePage/gamePageSlice";
import {
  getAllEngines,
  getEnginesAreLoaded,
} from "../../routes/enginesSection/enginePageSlice";
import { getCarousel } from "./imageCarouselSlice";
import { useEffect } from "react";

function ImageCarousel() {
  const [page, setPage] = useState(1);
  const allGames = useSelector(getAllGames);
  const allEngines = useSelector(getAllEngines);
  const carousel = useSelector(getCarousel);
  const gamesAreLoaded = useSelector(getgamesAreLoaded);
  const enginesAreLoaded = useSelector(getEnginesAreLoaded);
  const [carouselInfo, setCarouselInfo] = useState([]);

  useEffect(() => {
    if (carousel) {
      const carouselCards = carousel.preview.map((card) => {
        if (card._type === "game") {
          return allGames.filter((game) => game.name === card.name)[0];
        } else {
          return allEngines.filter((engine) => engine.name === card.name)[0];
        }
      });
      setCarouselInfo(carouselCards);
    }
  }, [carousel, allGames, allEngines]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="ImageCarousel_Container">
      <div className="ImageCarousel_Wrapper">
        <div className="Pagination_Container">
          <Typography variant="h6">SOME OF MY WORK</Typography>
          <Pagination
            count={carouselInfo.length}
            defaultPage={1}
            page={page}
            onChange={handleChange}
            color="secondary"
            className="Pagination_Menu"
          />
        </div>
        {!gamesAreLoaded || !enginesAreLoaded ? (
          <div className="Cards_Container">
            <Skeleton variant="rectangular" width={250} height={190} />
          </div>
        ) : (
          <div className="Cards_Container">
            {carouselInfo.map((gameInfo, index) => (
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
