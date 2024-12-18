import React, { useState } from "react";
import { Button, Skeleton, Typography } from "@mui/material";
import "./HomepageDisplay.css";
import GameCard from "../gameCard/GameCard";
import { useSelector } from "react-redux";
import {
  getAllGames,
  getgamesAreLoaded,
} from "../../routes/gamePage/gamePageSlice";
// import {
//   getAllEngines,
//   getEnginesAreLoaded,
// } from "../../routes/enginesSection/enginePageSlice";
import { getCarousel } from "../imageCarousel/imageCarouselSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function HomepageDisplay() {
  const allGames = useSelector(getAllGames);
  // const allEngines = useSelector(getAllEngines);
  const carousel = useSelector(getCarousel);
  const gamesAreLoaded = useSelector(getgamesAreLoaded);
  // const enginesAreLoaded = useSelector(getEnginesAreLoaded);
  const [carouselInfo, setCarouselInfo] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (carousel) {
      const carouselCards = carousel.preview.map((card) => {
        return allGames.filter((game) => game.name === card.name)[0];
      });
      setCarouselInfo(carouselCards);
    }
  }, [carousel, allGames]);

  return (
    <div className="HomepageDisplay_Container">
      <div className="HomepageDisplay_Wrapper">
        <div className="ImageCarousel_TitleContainer">
          <Typography variant="h4" sx={{ color: "#fff" }}>
            FEATURED PROJECTS
          </Typography>
          <Button
            variant="text"
            sx={{ textTransform: "lowercase" }}
            onClick={() => navigateTo("/Projects")}
          >
            <Typography variant="body1" color="secondary">
              + more
            </Typography>
          </Button>
        </div>
        {!gamesAreLoaded ? (
          <div className="HomepageDisplayCards_Container">
            <Skeleton variant="rectangular" width={250} height={190} />
          </div>
        ) : (
          <div className="HomepageDisplayCards_Container">
            {carouselInfo.map((gameInfo, index) =>
              index < 4 ? (
                <GameCard key={index} gameInfo={gameInfo} cardType="featured" />
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomepageDisplay;
