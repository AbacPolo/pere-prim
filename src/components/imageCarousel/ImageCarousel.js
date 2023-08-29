import React, { useState } from "react";
import "./ImageCarousel.css";
import { IconButton, Skeleton, Typography } from "@mui/material";
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
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

function ImageCarousel() {
  const [page, setPage] = useState(1);
  const [manualNav, setManualNav] = useState(false);
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

  let nextPage;
  if (manualNav === false) {
    nextPage = setTimeout(() => {
      if (page < carouselInfo.length) {
        setPage(page + 1);
      } else if (page === carouselInfo.length) {
        setPage(1);
      }
    }, "5000");
  }

  const handleManual = (direction) => {
    setManualNav(true);
    clearTimeout(nextPage);
    if (direction === "left" && page > 1) {
      setPage(page - 1);
    } else if (direction === "left" && page === 1) {
      setPage(carouselInfo.length);
    } else if (direction === "right" && page < carouselInfo.length) {
      setPage(page + 1);
    } else if (direction === "right" && page === carouselInfo.length) {
      setPage(1);
    }
  };

  return (
    <div className="ImageCarousel_Container">
      <div className="ImageCarousel_Wrapper">
        <Typography variant="h6">SOME OF MY WORK</Typography>
        {!gamesAreLoaded || !enginesAreLoaded ? (
          <div className="Cards_Container">
            <Skeleton variant="rectangular" width={250} height={190} />
          </div>
        ) : (
          <div className="Cards_Container">
            <IconButton
              aria-label="Go Left"
              color="secondary"
              className="Carousel_Button"
              onClick={() => handleManual("left")}
            >
              <ChevronLeft />
            </IconButton>
            {carouselInfo.map((gameInfo, index) => (
              <GameCard
                key={index}
                gameInfo={gameInfo}
                page={page}
                index={index + 1}
                cardType="compact"
              />
            ))}
            <IconButton
              aria-label="Go Right"
              color="secondary"
              className="Carousel_Button"
              onClick={() => handleManual("right")}
            >
              <ChevronRight />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageCarousel;
