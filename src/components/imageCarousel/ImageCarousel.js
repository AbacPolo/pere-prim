import React, { useState } from "react";
import "./ImageCarousel.css";
import { Button, Skeleton, Typography, CardMedia } from "@mui/material";
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
import { useNavigate } from "react-router";

// ------------------ Swiper ------------------
// https://codesandbox.io/p/devbox/swiper-effect-cards-react-forked-q76sfq?file=%2Fsrc%2FApp.jsx%3A18%2C18-18%2C23&workspaceId=13a61986-69b2-41b5-80a1-47a9155617f7

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';


function ImageCarousel() {
  //const [page, setPage] = useState(1);
  //const [manualNav, setManualNav] = useState(false);
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

  //const handleCardClick = (page) => {
  //  navigateTo(`/Projects/${page}`);
  //};
    try {
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

                    {!gamesAreLoaded ?
                        (
                            <Skeleton variant="rectangular" width={250} height={190} />
                        )
                        :
                        (
                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="swiper" >

                                {carouselInfo.map((gameInfo) => (

                                    <SwiperSlide className="swiper-card" >
                                        {gameInfo.bannerImage?.asset?.url ? (
                                            <CardMedia className="swiper-image" component="img"
                                                src={gameInfo.bannerImage.asset.url}
                                                alt={`${gameInfo.name} Banner`}>
                                            </CardMedia>
                                        ) : (
                                            <div className="swiper-card"></div>
                                        )}

                                        <div className="swiper-card-content" onClick={() => navigateTo(`/Projects/${gameInfo.name}`)}>
                                            <div className="swiper-card-title">
                                                <h3>{gameInfo.name}</h3>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

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
    } catch (error) {
        /*console.error("Some error rendering gameInfo at index:", error);*/

        <div className="ImageCarousel_Container">
            <div className="ImageCarousel_Wrapper">
                <div>
                    <Typography variant="h5">Se All projects</Typography>
                    <br></br>
                    <div className="ImageCarousel_TitleContainer">
                        <Button
                            variant="text"
                            sx={{ textTransform: "lowercase" }}
                            onClick={() => navigateTo("/Projects")}
                        >
                            <Typography variant="body1" color="secondary">
                                + here
                            </Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        return null;
    }
}

export default ImageCarousel;
