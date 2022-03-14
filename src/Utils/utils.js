import { UNIBET_CLIENT } from '../constant/constant';
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

export const getGameTime = (sportDate) => {
  let gameSchedule;
  const todayDate = new Date().toISOString().split('T')[0];
  const gameTime = new Date(sportDate).toLocaleTimeString();
  const gameDate = new Date(sportDate).toISOString().slice(0, 10);
  todayDate === gameDate ? (gameSchedule = 'Today') : (gameSchedule = gameDate);
  return `${gameSchedule}, ${gameTime}`;
};

export const goToBettingClient = (eventId) => {
  const redirectUrl = `${UNIBET_CLIENT}${eventId}`;
  window.open(redirectUrl, '_blank');
};

export const getErrorMessage = (error) => {
  if (error instanceof Error)
    return error.message.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  return String(error);
};
