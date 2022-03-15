import {
  getImage,
  getGameTime,
  goToBettingClient,
  getErrorMessage,
} from './utils';
import { errorMessageUrl } from '../TestData/TestData';
import * as _Window from 'jsdom/lib/jsdom/browser/Window';

describe('Utils Function', () => {
  window.open = jest.fn().mockImplementationOnce(() => {
    return new _Window({ parsingMode: 'html' });
  });

  test('Should get correct image based on image type', () => {
    const actualResult = getImage('FOOTBALL');
    expect(actualResult).toEqual('football.png');
    const defaultResult = getImage('CRICKET');
    expect(defaultResult).toEqual('default.png');
  });

  test('Should not get incorrect image based on image type', () => {
    const actualResult = getImage('FOOTBALL');
    expect(actualResult).not.toEqual('default.png');
  });

  test('Should get correct sport time if match is today', () => {
    const gameScheduleResult = getGameTime('2022-03-15T06:20Z');
    expect(gameScheduleResult).toEqual('Today, 11:50:00');
  });

  test('Should get correct sport time if match was yesterday', () => {
    const gameScheduleResult = getGameTime('2022-03-13T06:20Z');
    expect(gameScheduleResult).toEqual('2022-03-13, 11:50:00');
  });

  test('Should not show  incorrect sport time if match is today', () => {
    const gameScheduleResult = getGameTime('2022-03-15T06:20Z');
    expect(gameScheduleResult).not.toEqual('2022-03-15, 11:50:00');
  });

  test('Should get redirect single time based on betting client url and eventId', () => {
    goToBettingClient(1018502291);
    expect(window.open).toHaveBeenCalledTimes(1);
  });

  test('Should get error message type is string', () => {
    const error = new TypeError('Error message');
    expect(typeof error).toEqual('object');
    const resultError = getErrorMessage(error);
    expect(typeof resultError).toEqual('string');
  });

  test('Should remove url from error message if any', () => {
    const resultError = getErrorMessage(errorMessageUrl);
    expect(resultError).toEqual('JSONP server getting  failed');
  });
});
