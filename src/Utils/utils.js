const tennisBallLogo = require('../assets/images/icons/tennis.png');
const basketBallLogo = require('../assets/images/icons/basketball.png');
const footBallLogo = require('../assets/images/icons/football.png');
const defaultLogo = require('../assets/images/icons/default.png');

export const getImage = (imageType) => {
  switch (imageType) {
    case 'TENNIS':
      return tennisBallLogo;
    case 'FOOTBALL':
      return footBallLogo;
    case 'BASKETBALL':
      return basketBallLogo;
    default:
      return defaultLogo;
  }
};
