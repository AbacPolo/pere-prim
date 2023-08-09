import Anbara_BannerImage from "../images/Andara.JPG";
import SpaceShock_BannerImage from "../images/SpaceShock.JPG";
import SpaceTurtle_BannerImage from "../images/SpaceTurtle.JPG";
import andara_dash from "../images/andara_dash.gif";
import andara_finisher from "../images/andara_finisher.gif"
import andara_melee_enemies from "../images/andara_melee_enemies.gif"
import andara_melee_wall from "../images/andara_melee_wall.gif"
import andara_slowmo from "../images/andara_slowmo.gif"
import chivito_logo from "../images/chivito_logo.webp"
import spaceshock_gameplay from "../images/spaceshock_gameplay.gif"
import spaceshock_gameplay_2 from "../images/spaceshock_gameplay_2.gif"
import spaceshock_controls from "../images/spaceshock_controls.webp"

const images = {
  Andara: {
    BannerImage: {
      src: Anbara_BannerImage,
      alt: "Anbara_BannerImage",
    },
    andara_dash: {
      src: andara_dash,
      alt: "andara dash",
    },
    andara_finisher: {
      src: andara_finisher,
      alt: 'andara finisher'
    },
    andara_melee_enemies: {
      src: andara_melee_enemies,
      alt: 'andara melee enemies'
    },
    andara_melee_wall: {
      src: andara_melee_wall,
      alt: 'andara melee wall'
    },
    andara_slowmo: {
      src: andara_slowmo,
      alt: 'andara slowmo'
    },
    chivito_logo: {
      src: chivito_logo,
      alt: 'chivito logo'
    }
  },
  "SpaceShock V2": {
    BannerImage: {
      src: SpaceShock_BannerImage,
      alt: "SpaceShock_BannerImage",
    },
    spaceshock_gameplay: {
      src: spaceshock_gameplay,
      alt: "spaceshock gameplay",
    },
    spaceshock_gameplay_2: {
      src: spaceshock_gameplay_2,
      alt: "spaceshock gameplay 2",
    },
    spaceshock_controls: {
      src: spaceshock_controls,
      alt: "spaceshock controls",
    }
  },
  SpaceTurtle: {
    BannerImage: {
      src: SpaceTurtle_BannerImage,
      alt: "SpaceShock_BannerImage",
    },
  },
  "Random Game": {
    BannerImage: {
      src: SpaceTurtle_BannerImage,
      alt: "SpaceShock_BannerImage",
    },
  },
};

export const matchImage = (gameName, imageName) => {
  return images[gameName][imageName];
};

export default images;
