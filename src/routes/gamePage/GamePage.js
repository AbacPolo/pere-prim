import React, { useEffect, useState } from "react";
import "./GamePage.css";
import { Typography } from "@mui/material";
import { useLocation } from "react-router";
import IndexMenu from "../../components/indexMenu/IndexMenu";
import SectionCard from "../../components/sectionCard/SectionCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllGames,
  getAllGames,
  getgamesAreLoaded,
  getgamesAreLoading,
} from "./gamePageSlice";
import SocialsCard from "../../components/socialsCard/SocialsCard";
// import {
//   fetchAllEngines,
//   getAllEngines,
//   getEnginesAreLoaded,
//   getEnginesAreLoading,
// } from "../enginesSection/enginePageSlice";
import ReactGA from 'react-ga4';

function GamePage() {
  const location = useLocation();
  const [gameInfo, setGameInfo] = useState(null);
  const [gameSectionsName, setGameSectionsName] = useState([]);
  const [gameSections, setGameSections] = useState([]);

  const allGames = useSelector(getAllGames);
  // const allEngines = useSelector(getAllEngines);

  const allData = location.pathname.includes("/Projects/") && allGames ;

  const dispatch = useDispatch();
  const gamesAreLoaded = useSelector(getgamesAreLoaded);
  const gamesAreLoading = useSelector(getgamesAreLoading);
  // const enginesAreLoaded = useSelector(getEnginesAreLoaded);
  // const enginesAreLoading = useSelector(getEnginesAreLoading);

  useEffect(() => {
    !gamesAreLoaded && !gamesAreLoading && dispatch(fetchAllGames());
    // !enginesAreLoaded && !enginesAreLoading && dispatch(fetchAllEngines());
  }, [
    gamesAreLoaded,
    gamesAreLoading,
    // enginesAreLoaded,
    // enginesAreLoading,
    dispatch,
  ]);

  useEffect(() => {
    if (allData.length > 0) {
      const gameName = location.pathname
        .replace("/Projects/", "")
        .replaceAll("%20", " ");
      const gameInfoFilter = allData.filter(
        (game) => game.name === gameName
      )[0];
      const sectionsNameArray = gameInfoFilter.cards
        ? gameInfoFilter.cards.map((card) => card.name)
        : [];
      const sectionsArray = gameInfoFilter.cards
        ? gameInfoFilter.cards.map((card) => card)
        : [];
      setGameInfo(gameInfoFilter);
      setGameSectionsName(sectionsNameArray);
      setGameSections(sectionsArray);
    }
  }, [location, allData]);


  if (gameInfo) {
      ReactGA.send({ hitType: "pageview", page: "/Projects/" + gameInfo.name, title: gameInfo.name, });

    return (
      <div className="GamePage_Container">
        <div className="GamePage_Wrapper">
          <Typography className="Page_Title" variant="h2">
            {gameInfo.name}
          </Typography>
          <img
            className="GamePage_BannerImage"
            src={gameInfo.bannerImage.asset.url}
            alt={`${gameInfo.name} Banner`}
          ></img>
          <IndexMenu variant="sections" terms={gameSectionsName} />
          {gameInfo.socials && <SocialsCard socialsInfo={gameInfo.socials} />}
          {gameSections.map((section, index) => (
            <SectionCard key={index} sectionInfo={section} />
          ))}
        </div>
      </div>
    );
  }
}

export default GamePage;
