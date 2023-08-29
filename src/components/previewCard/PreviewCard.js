import React from "react";
import "./PreviewCard.css";
import {
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { PortableText } from "@portabletext/react";
import components from "../../portableTextComponents";
import classNames from "classnames";

function PreviewCard({ previewinfo }) {
  return (
    <Card className="SectionCard_Container PreviewCard_Container">
      <CardContent className="SectionCard_Wrapper">
        {previewinfo.map((contentBlock, index) => {
          switch (contentBlock._type) {
            case "richText":
              return (
                <div
                  key={index}
                  className={classNames("SectionCard_LeftText", {
                    SectionCard_CenteredText:
                      contentBlock.contentAlignment === "center",
                  })}
                >
                  <PortableText
                    value={contentBlock.contentText}
                    components={components}
                  />
                </div>
              );
            case "media":
              return (
                <CardMedia
                  key={index}
                  component="img"
                  src={contentBlock.image.asset.url}
                  alt={contentBlock.alt}
                  className="SectionCard_Image"
                />
              );
            default:
              return <div key={index}>ERROR</div>;
          }
        })}
      </CardContent>
    </Card>
  );
}

export default PreviewCard;
