import React, { useState } from "react";
import { Skeleton, Typography } from "@mui/material";
import "./HomepageDisplay.css"
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
import { getCarousel } from "../imageCarousel/imageCarouselSlice";
import { useEffect } from "react";

function HomepageDisplay() {
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

  return (
    <div className="HomepageDisplay_Container">
      <div className="HomepageDisplay_Wrapper">
        <Typography variant="h4" sx={{color: "#fff"}}>SOME OF MY WORK</Typography>
        {!gamesAreLoaded || !enginesAreLoaded ? (
          <div className="HomepageDisplayCards_Container">
            <Skeleton variant="rectangular" width={250} height={190} />
          </div>
        ) : (
          <div className="HomepageDisplayCards_Container">
            {carouselInfo.map((gameInfo, index) => (
              index < 4 ?
              <GameCard
                key={index}
                gameInfo={gameInfo}
                cardType="compact"
              /> : null
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomepageDisplay;
