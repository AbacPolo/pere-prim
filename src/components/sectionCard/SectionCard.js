import React from "react";
import "./SectionCard.css";
import { Card, CardContent, Typography } from "@mui/material";
import videos from "../../data/loadVideos";
import images, { matchImage } from "../../data/loadImages";
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
                <Typography key={index} variant="body1">
                  {block.text}
                </Typography>
              );
            case "subtitle":
              return (
                <Typography
                  key={index}
                  className="SectionCard_Subtitle"
                  variant="h4"
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
                <ul className="List_Container" key={index}>
                  {block.unorderedList.map((item, index) => (
                    <Typography key={index} variant="body1">
                      <li>{item}</li>
                    </Typography>
                  ))}
                </ul>
              );
            case "image":
              const image = matchImage(game, block.image);
              return <img key={index} src={image.src} alt={image.alt}></img>;
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
                  <img src={social.logo} alt={social.name}></img>
                  <Typography variant="h5">
                    <a href={block.social} target="_blank" rel="noreferrer">
                      {block.caption}
                    </a>
                  </Typography>
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
