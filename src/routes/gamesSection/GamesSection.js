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

    // Get unique list of tags.
    const categoriesArray = allGames.map((game) => game.game_Tags);
    const allTags = categoriesArray.flat();
    const keys = allTags.map(tag => tag._key);
    const filteredCategoriesArray = [...new Set(keys)];

    const checkIfTagExists = (tagKey, tagMap) => {
        return Object.values(tagMap).includes(tagKey);
    };

    return (
        <div className="GamesSection_Container">
            <div className="GamesSection_Wrapper">
                <Typography className="Section_Title" variant="h2">
                    PROJECTS
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
                            } else if (checkIfTagExists(activeCategory, gameInfo.game_Tags.map(tag => tag._key))) {
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
