import twitterLogo from "../images/twitter.png";
import facebookLogo from "../images/facebook.png";
import githubLogo from "../images/github.png";
import steamLogo from "../images/steam.png";
import linkedinLogo from "../images/linkedin.png";
import youtubeLogo from "../images/youtube.png";


const availableSocials = [
  { name: "twitter", logo: twitterLogo },
  { name: "facebook", logo: facebookLogo },
  { name: "github", logo: githubLogo },
  { name: "steam", logo: steamLogo },
  { name: "linkedin", logo: linkedinLogo },
  { name: "youtube", logo: youtubeLogo },
];

export const matchSocial = (link) => {
  let matchSocial = "";
  availableSocials.forEach((social) => {
    if (link.includes(social.name)) {
      matchSocial = social;
    }
  });
  return matchSocial;
};

export default availableSocials;
