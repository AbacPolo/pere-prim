import React, { useState } from "react";
import "./GamesSection.css";
import { Typography } from "@mui/material";
import information from "../../data/information.json";
import GameCard from "../../components/gameCard/GameCard";
import IndexMenu from "../../components/indexMenu/IndexMenu";

function GamesSection() {
  const [activeCategory, setActiveCategory] = useState("");

  const categoriesArray = information.games.map((game) => game.engine);
  const filteredCategoriesArray = [...new Set(categoriesArray)];

  return (
    <div className="GamesSection_Container">
      <div className="GamesSection_Wrapper">
        <Typography className="Section_Title" variant="h2">
          GAMES
        </Typography>
        <IndexMenu
          variant="categories"
          terms={filteredCategoriesArray}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="GamesSectionCard_Container">
          <div className="GamesSectionCard_Wrapper">
            {information.games.map((gameInfo, index) => {
              if (activeCategory === "") {
                return <GameCard key={index} gameInfo={gameInfo} />;
              } else if (activeCategory === gameInfo.engine) {
                return <GameCard key={index} gameInfo={gameInfo} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesSection;
