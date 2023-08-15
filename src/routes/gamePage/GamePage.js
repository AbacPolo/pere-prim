import React, { useEffect, useState } from "react";
import "./GamePage.css";
import { Typography } from "@mui/material";
import { useLocation } from "react-router";
import IndexMenu from "../../components/indexMenu/IndexMenu";
import SectionCard from "../../components/sectionCard/SectionCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames, getAllGames, getgamesAreLoaded } from "./gamePageSlice";
import SocialsCard from "../../components/socialsCard/SocialsCard";

function GamePage() {
  const location = useLocation();
  const [gameInfo, setGameInfo] = useState(null);
  const [gameSectionsName, setGameSectionsName] = useState([]);
  const [gameSections, setGameSections] = useState([]);
  const allGames = useSelector(getAllGames);

  const dispatch = useDispatch();
  const gamesAreLoaded = useSelector(getgamesAreLoaded);

  useEffect(() => {
    !gamesAreLoaded && dispatch(fetchAllGames());
  }, [gamesAreLoaded, dispatch]);

  useEffect(() => {
    if (allGames.length > 0) {
      const gameName = location.pathname
        .replace("/Games/", "")
        .replace("%20", " ");
      const gameInfoFilter = allGames.filter(
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
  }, [location, allGames]);

console.log('gameSections',gameSections);
  if (gameInfo) {
    return (
      <div className="GamePage_Container">
        <div className="GamePage_Wrapper">
          <Typography className="Page_Title" variant="h2">
            {gameInfo.name}
          </Typography>
          <img
            className="GamePage_BannerImage"
            src={gameInfo.bannerImage.asset.url}
            alt={gameInfo.name}
          ></img>
          <IndexMenu variant="sections" terms={gameSectionsName} />
          {gameInfo.socials && <SocialsCard socialsInfo={gameInfo.socials}
            />}
          {gameSections.map((section, index) => (
            <SectionCard
              key={index}
              sectionInfo={section}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GamePage;
