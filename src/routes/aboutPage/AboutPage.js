import React from "react";
import "./AboutPage.css";
import MainBanner from "../../components/mainBanner/MainBanner";
import IndexMenu from "../../components/indexMenu/IndexMenu";
import information from "../../data/information.json";
import SectionCard from "../../components/sectionCard/SectionCard";

function AboutPage() {
  
  const sectionsNameArray = information.about.sections
    ? information.about.sections.map((section) => section.sectionTitle)
    : [];

  return (
    <div className="AboutPage_Container">
      <div className="AboutPage_Wrapper">
        <MainBanner />
        <IndexMenu variant="sections" terms={sectionsNameArray} />
        {information.about.sections.map((section, index) => (
          <SectionCard
            key={index}
            sectionInfo={section}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
