import React from "react";
import "./IndexMenu.css";
import { Button } from "@mui/material";
import classNames from "classnames";

function IndexMenu({ variant, terms, activeCategory, setActiveCategory }) {
  return (
    <div className="IndexMenu_Container">
      {variant === "categories" ? (
        <Button
          variant="outlined"
          color="secondary"
          className={classNames("CategoryMenu_Button", {
            ActiveCategory: activeCategory === "",
          })}
          onClick={() => setActiveCategory("")}
        >
          <p>All</p>
        </Button>
      ) : null}
      {terms.map((term, index) =>
        term !== "" ? (
          <Button
            variant="outlined"
            color="secondary"
            key={index}
            className={classNames("CategoryMenu_Button", {
              ActiveCategory: activeCategory === term,
            })}
            onClick={() =>
              variant === "categories"
                ? setActiveCategory(term)
                : document
                    .getElementById(`${term}`)
                    .scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <p>{term}</p>
          </Button>
        ) : null
      )}
    </div>
  );
}

export default IndexMenu;
