import React, { useState } from "react";
import "./ImageCarousel.css";
import { Button, Skeleton, Typography, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";

import {
    getAllGames,
    getgamesAreLoaded,
} from "../../routes/gamePage/gamePageSlice";

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
    const allGames = useSelector(getAllGames);
    const carousel = useSelector(getCarousel);
    const gamesAreLoaded = useSelector(getgamesAreLoaded);
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

    const handleCardClick = (page) => {
        navigateTo(`/Projects/${page}`);
    };

    try {
        return (
            <div className="ImageCarousel_Container">
                <div className="ImageCarousel_Wrapper">
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

                                {carouselInfo.map((gameInfo, index) => (

                                    <SwiperSlide key={index} className="swiper-card" >
                                        {/*Try to load card Image*/}
                                        {gameInfo.cardImage?.asset?.url ? (
                                            <CardMedia className="swiper-image" component="img"
                                                src={gameInfo.cardImage.asset.url}
                                                alt={`${gameInfo.name} Banner`}>
                                            </CardMedia>
                                        ) : (
                                            /*Else Try to load banner Image*/
                                            gameInfo.bannerImage?.asset?.url ? (
                                                <CardMedia className="swiper-image" component="img"
                                                    src={gameInfo.bannerImage.asset.url}
                                                    alt={`${gameInfo.name} Banner`}>
                                                </CardMedia>
                                            ) : (
                                                <div className="swiper-card"></div>
                                            )
                                        )}

                                        <div className="swiper-card-content" onClick={() => handleCardClick(gameInfo.name)}>
                                            {/*<div className="swiper-card-title">*/}
                                            {/*    <h3>{gameInfo.name}</h3>*/}
                                            {/*</div>*/}
                                            <span className="Card_Date">
                                                {gameInfo.project_Date}
                                            </span>
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
