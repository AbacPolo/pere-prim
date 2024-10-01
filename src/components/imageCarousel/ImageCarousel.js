import React, { useState } from "react";
import "./ImageCarousel.css";
import { Button, IconButton, Skeleton, Typography } from "@mui/material";
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
import { getCarousel } from "./imageCarouselSlice";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router";

// ------------------ Swiper ------------------
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';


function ImageCarousel() {
  const [page, setPage] = useState(1);
  const [manualNav, setManualNav] = useState(false);
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
    <div className="ImageCarousel_Container">
      <div className="ImageCarousel_Wrapper">
        {/*<div className="ImageCarousel_TitleContainer">*/}
        {/*  <Typography variant="h6">FEATURED PROJECTS</Typography>*/}
        {/*  <Button*/}
        {/*    variant="text"*/}
        {/*    sx={{ textTransform: "lowercase" }}*/}
        {/*    onClick={() => navigateTo("/Projects")}*/}
        {/*  >*/}
        {/*    <Typography variant="body1" color="secondary">*/}
        {/*      + more*/}
        {/*    </Typography>*/}
        {/*  </Button>*/}
        {/*</div>*/}
        {/*{!gamesAreLoaded ? (*/}
        {/*  <div className="Cards_Container">*/}
        {/*    <Skeleton variant="rectangular" width={250} height={190} />*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  <div className="Cards_Container">*/}
        {/*    <IconButton*/}
        {/*      aria-label="Go Left"*/}
        {/*      color="secondary"*/}
        {/*      className="Carousel_Button"*/}
        {/*      onClick={() => handleManual("left")}*/}
        {/*    >*/}
        {/*      <ChevronLeft />*/}
        {/*    </IconButton>*/}
        {/*    {carouselInfo.map((gameInfo, index) => (*/}
        {/*      <GameCard*/}
        {/*        key={index}*/}
        {/*        gameInfo={gameInfo}*/}
        {/*        page={page}*/}
        {/*        index={index + 1}*/}
        {/*        cardType="compact"*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*    <IconButton*/}
        {/*      aria-label="Go Right"*/}
        {/*      color="secondary"*/}
        {/*      className="Carousel_Button"*/}
        {/*      onClick={() => handleManual("right")}*/}
        {/*    >*/}
        {/*      <ChevronRight />*/}
        {/*    </IconButton>*/}
        {/*  </div>*/}
              {/*)}*/}

              <div>
                  <Typography variant="h5">FEATURED PROJECTS</Typography>
              </div>
              <br></br>
              <>
                  <Swiper
                      effect={"cards"}
                      grabCursor={true}
                      modules={[EffectCards]}
                      className="mySwiper"
                  >

                    {carouselInfo.map((gameInfo, index) => (
                        <SwiperSlide>{gameInfo.name}</SwiperSlide>
                    ))}
                  </Swiper>
              </>

              <div className="ImageCarousel_TitleContainer">
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

      </div>
    </div>
  );
}

export default ImageCarousel;
