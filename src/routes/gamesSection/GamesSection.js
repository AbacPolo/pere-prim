import React, { useEffect, useState } from "react";
import "./GamesSection.css";
import { Typography } from "@mui/material";
import GameCard from "../../components/gameCard/GameCard";
import IndexMenu from "../../components/indexMenu/IndexMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames, getAllGames, getgamesAreLoaded, getgamesAreLoading } from "../gamePage/gamePageSlice";

function GamesSection() {
  const [activeCategory, setActiveCategory] = useState("");
  const allGames = useSelector(getAllGames);

  const dispatch = useDispatch();
  const gamesAreLoaded = useSelector(getgamesAreLoaded);
  const gamesAreLoading = useSelector(getgamesAreLoading);
  
  useEffect(() => {
    !gamesAreLoaded && !gamesAreLoading && dispatch(fetchAllGames());
  }, [gamesAreLoaded, gamesAreLoading, dispatch]);

  const categoriesArray = allGames.map((game) => game.engine);
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
            {allGames.map((gameInfo, index) => {
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
