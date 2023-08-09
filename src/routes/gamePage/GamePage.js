import React, { useEffect, useState } from "react";
import "./GamePage.css";
import { Typography } from "@mui/material";
import { useLocation } from "react-router";
import information from "../../data/information.json";
import { matchImage } from "../../data/loadImages";
import IndexMenu from "../../components/indexMenu/IndexMenu";
import SectionCard from "../../components/sectionCard/SectionCard";

function GamePage() {
  const location = useLocation();
  const [gameInfo, setGameInfo] = useState(null);
  const [gameSectionsName, setGameSectionsName] = useState([]);
  const [gameSections, setGameSections] = useState([]);

  useEffect(() => {
    const gameTitle = location.pathname
      .replace("/Games/", "")
      .replace("%20", " ");
    const gameInfoFilter = information.games.filter(
      (game) => game.title === gameTitle
    )[0];
    const sectionsNameArray = gameInfoFilter.sections
      ? gameInfoFilter.sections.map((section) => section.sectionTitle)
      : [];
    const sectionsArray = gameInfoFilter.sections
      ? gameInfoFilter.sections.map((section) => section)
      : [];
    setGameInfo(gameInfoFilter);
    setGameSectionsName(sectionsNameArray);
    setGameSections(sectionsArray);
  }, [location]);

  if (gameInfo) {
    const image = matchImage(gameInfo.title, "BannerImage");
    return (
      <div className="GamePage_Container">
        <div className="GamePage_Wrapper">
          <Typography className="Page_Title" variant="h2">
            {gameInfo.title}
          </Typography>
          <img
            className="GamePage_BannerImage"
            src={image.src}
            alt={gameInfo.title}
          ></img>
          <IndexMenu variant="sections" terms={gameSectionsName} />
          {gameSections.map((section, index) => (
            <SectionCard
              key={index}
              sectionInfo={section}
              game={gameInfo.title}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GamePage;
