import React, { useEffect } from "react";
import "./AboutPage.css";
import MainBanner from "../../components/mainBanner/MainBanner";
import IndexMenu from "../../components/indexMenu/IndexMenu";
import SectionCard from "../../components/sectionCard/SectionCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAbout,
  getAbout,
  getAboutIsLoaded,
  getAboutIsLoading,
} from "./aboutPageSlice";
import {
  fetchMainBanner,
  getBannerIsLoaded,
  getBannerIsLoading,
} from "../../components/mainBanner/mainBannerSlice";
import ReactGA from 'react-ga4';

function AboutPage() {
  const dispatch = useDispatch();
  const aboutInfo = useSelector(getAbout);
  const aboutIsLoaded = useSelector(getAboutIsLoaded);
  const aboutIsLoading = useSelector(getAboutIsLoading);
  const bannerIsLoaded = useSelector(getBannerIsLoaded);
  const bannerIsLoading = useSelector(getBannerIsLoading);

  useEffect(() => {
    !bannerIsLoaded && !bannerIsLoading && dispatch(fetchMainBanner());
    !aboutIsLoaded && !aboutIsLoading && dispatch(fetchAbout());
  }, [
    bannerIsLoaded,
    bannerIsLoading,
    aboutIsLoaded,
    aboutIsLoading,
    dispatch,
  ]);

    ReactGA.send({ hitType: "pageview", page: "/About", title: "About", });

  if (aboutInfo) {
    const sectionsNameArray = aboutInfo.cards
      ? aboutInfo.cards.map((card) => card.name)
      : [];
    return (
      <div className="AboutPage_Container">
        <div className="AboutPage_Wrapper">
          <MainBanner />
          <div className="AboutPageSections_Wrapper">
            <IndexMenu variant="sections" terms={sectionsNameArray} />
            {aboutInfo.cards.map((section, index) => (
              <SectionCard key={index} sectionInfo={section} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
