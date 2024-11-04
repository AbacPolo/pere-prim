import React from "react";
import { IconButton, Skeleton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getBannerIsLoaded, getMainBanner } from "./mainBannerSlice";
import { IconSelector } from "../socialsCard/SocialsCard";

import Typewriter from 'typewriter-effect';
import "./MainBanner.css";

function MainBanner() {
  const pageBanner = useSelector(getMainBanner);
  const bannerIsLoaded = useSelector(getBannerIsLoaded);

  if (bannerIsLoaded === false) {
    return (
      <div className="MainBanner_Container">
        <div className="MainBanner_Wrapper">
          <Skeleton variant="rectangular" width="80%" height={280} />
          <div className="Text_Container">
            <Skeleton variant="rectangular" width="100%" height={45} />
            <Skeleton variant="rectangular" width="100%" height={28} />
            <div className="Socials_Container">
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="circular" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="MainBanner_Container">
        <div className="MainBanner_Wrapper">
          <img
            className="profile_Image"
            src={pageBanner.bannerImage.asset.url}
            alt="Profile"
          ></img>
          <div className="Text_Container">
            <Typography variant="h1" className="MainTitle">
               Pere
                <Typewriter
                    onInit={(typewriter) => {
                    typewriter
                        .typeString('Prm')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('Prim')
                        .pauseFor(8000)
                        .start();
                }}
                options={{
                    cursor: '',
                    loop: true,
                }}
                />
            </Typography>
            <Typography variant="h3" className="Subtitle">
              {pageBanner.subtitle}
            </Typography>
            <div className="Socials_Container">
              {pageBanner.socials.map((card) =>
                card.content.map((social, index) => (
                  <IconButton
                    key={index}
                    color="secondary"
                    aria-label={social.linkLable}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {IconSelector(social.socialIcon)}
                  </IconButton>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBanner;
