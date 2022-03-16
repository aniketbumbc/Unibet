import {
  getImage,
  getGameTime,
  goToBettingClient,
  getErrorMessage,
  clearCache,
} from './utils';
import { CACHE_EXPIRTY } from '../constant/constant';
import { errorMessageUrl } from '../TestData/TestData';
import * as _Window from 'jsdom/lib/jsdom/browser/Window';

describe('Utils Function', () => {
  window.open = jest.fn().mockImplementationOnce(() => {
    return new _Window({ parsingMode: 'html' });
  });

  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');

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
    const gameScheduleResult = getGameTime(new Date());
    expect(gameScheduleResult).toMatch(/Today/i);
  });

  test('Should get correct sport time if match was yesterday', () => {
    const gameScheduleResult = getGameTime('2022-03-13T06:20Z');
    expect(gameScheduleResult).toEqual('2022-03-13, 11:50:00');
  });

  test('Should not show  incorrect sport time if match is today', () => {
    const gameScheduleResult = getGameTime(new Date());
    expect(gameScheduleResult).not.toEqual('2022-03-15, 11:50:00');
  });

  test('Should get redirect one time based on betting client url and eventId', () => {
    goToBettingClient(1018502291);
    expect(window.open).toHaveBeenCalledTimes(1);
  });

  test('Should not called more than one time', () => {
    goToBettingClient(1018502291);
    expect(window.open).not.toHaveBeenCalledTimes(2);
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

  test('Should wait for 2 minitues before clear cache', () => {
    clearCache();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      CACHE_EXPIRTY
    );
  });

  test('Should not wait less thane 2 minitues before clear cache', () => {
    clearCache();
    expect(setTimeout).not.toHaveBeenLastCalledWith(
      expect.any(Function),
      60000
    );
  });
});
