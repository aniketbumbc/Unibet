import { UNIBET_CLIENT, CACHE_EXPIRTY } from '../constant/constant';
import localForage from 'localforage';
const tennisBallLogo = require('../assets/images/icons/tennis.png');
const basketBallLogo = require('../assets/images/icons/basketball.png');
const footBallLogo = require('../assets/images/icons/football.png');
const defaultLogo = require('../assets/images/icons/default.png');

/**
 * Method return image based on image type
 * @param {*} imageType
 */

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

/**
 * Method based on date return game Time
 * If it is today then return Today otherwise return date
 * @param {*} sportDate
 */

export const getGameTime = (sportDate) => {
  let gameSchedule;
  const todayDate = new Date().toISOString().split('T')[0];
  const gameTime = new Date(sportDate).toLocaleTimeString();
  const gameDate = new Date(sportDate).toISOString().slice(0, 10);
  todayDate === gameDate ? (gameSchedule = 'Today') : (gameSchedule = gameDate);
  return `${gameSchedule}, ${gameTime}`;
};

/**
 * Based on eventId redirection of url happned.
 * @param { } eventId
 */

export const goToBettingClient = (eventId) => {
  const redirectUrl = `${UNIBET_CLIENT}${eventId}`;
  window.open(redirectUrl, '_blank');
};

/**
 * return error message in string and removed senstitive information like URL,clientId
 * @param {} error
 */

export const getErrorMessage = (error) => {
  if (error instanceof Error)
    return error.message.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  return String(error);
};

/**
 *  Method clear cache from indexDB
 */

export const clearCache = () => {
  setTimeout(() => {
    localForage.clear().then(() => {
      console.log('Clear cache data');
    });
  }, CACHE_EXPIRTY);
};
