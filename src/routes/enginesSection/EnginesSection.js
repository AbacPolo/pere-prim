import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import GameCard from "../../components/gameCard/GameCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEngines, getAllEngines, getEnginesAreLoaded, getEnginesAreLoading } from "./enginePageSlice";

function EnginesSection() {
  const allEngines = useSelector(getAllEngines);

  const dispatch = useDispatch();
  const enginesAreLoaded = useSelector(getEnginesAreLoaded);
  const enginesAreLoading = useSelector(getEnginesAreLoading);

  useEffect(() => {
    !enginesAreLoaded && !enginesAreLoading && dispatch(fetchAllEngines());
  }, [enginesAreLoaded, enginesAreLoading, dispatch]);

  return (
    <div className="GamesSection_Container">
      <div className="GamesSection_Wrapper">
        <Typography className="Section_Title" variant="h2">
          ENGINES
        </Typography>
        <div className="GamesSectionCard_Container">
          <div className="GamesSectionCard_Wrapper">
            {allEngines.map((engineInfo, index) => {
              return <GameCard key={index} gameInfo={engineInfo} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnginesSection;
