import React from "react";
import "./SectionCard.css";
import { Card, CardContent, Typography } from "@mui/material";
import videos from "../../data/loadVideos";
import images from "../../data/loadImages";
import ReactPlayer from "react-player";
import { matchSocial } from "../../data/loadSocials";

function SectionCard({ sectionInfo, game }) {
  return (
    <Card id={sectionInfo.sectionTitle} className="SectionCard_Container">
      <CardContent className="SectionCard_Wrapper">
        {sectionInfo.sectionTitle !== "" ? (
          <Typography className="SectionCard_Title" variant="h3">
            {sectionInfo.sectionTitle}
          </Typography>
        ) : null}

        {sectionInfo.sectionContent.map((block, index) => {
          switch (Object.keys(block)[0]) {
            case "text":
              return (
                <Typography variant="body1" key={index}>
                  {block.text}
                </Typography>
              );
            case "subtitle":
              return (
                <Typography
                  className="SectionCard_Subtitle"
                  variant="h4"
                  key={index}
                >
                  {block.subtitle}
                </Typography>
              );
            case "bulletPoint":
              return (
                <Typography key={index} variant="h5">
                  <li>{block.bulletPoint}</li>
                </Typography>
              );
            case "unorderedList":
              return (
                <ul className="List_Container">
                  {block.unorderedList.map((item, index) => (
                    <Typography key={index} variant="body1">
                      <li>{item}</li>
                    </Typography>
                  ))}
                </ul>
              );
            case "image":
              return (
                <img
                  key={index}
                  src={images[game][block.image].src}
                  alt={images[game][block.image].alt}
                ></img>
              );
            case "video":
              return (
                <div key={index} className="VideoPlayer_Wrapper">
                  <ReactPlayer
                    url={videos[game][block.video].url}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              );
            case "youtube":
              return (
                <div key={index} className="VideoPlayer_Wrapper">
                  <ReactPlayer
                    url={block.youtube}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              );
            case "social":
              const social = matchSocial(block.social);
              return (
                <div key={index} className="Socials_Wrapper">
                  <img key={index} src={social.logo} alt={social.name}></img>
                </div>
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
