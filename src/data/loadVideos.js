import Andara_Trailer from "../images/Andara_Trailer.mp4";

const videos = {
  Andara: {
    Andara_Trailer: {
      url: Andara_Trailer,
      alt: "Andara Trailer",
    },
  },
};

export const matchVideo = (gameName, videoName) => {
  return videos[gameName][videoName];
};

export default videos;