import React from "react";
import "./SectionCard.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import { PortableText } from "@portabletext/react";
import components from "../../portableTextComponents";

function SectionCard({ sectionInfo }) {
  console.log("sectionInfo", sectionInfo);

  return (
    <Card id={sectionInfo.name} className="SectionCard_Container">
      <CardContent className="SectionCard_Wrapper">
        {sectionInfo.name !== "" ? (
          <Typography className="SectionCard_Title" variant="h3">
            {sectionInfo.name}
          </Typography>
        ) : null}

        {sectionInfo.content.map((contentBlock, index) => {
          switch (contentBlock._type) {
            case "video":
              return (
                <div key={index} className="VideoPlayer_Wrapper">
                  <ReactPlayer
                    url={contentBlock.url}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              );
            case "richText":
              return (
                <PortableText
                  value={contentBlock.contentText}
                  components={components}
                />
              );
            case "media":
              return (
                <CardMedia
                  component="img"
                  src={contentBlock.image.asset.url}
                  alt="Social Logo"
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

export default SectionCard;
