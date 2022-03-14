import { useState, useEffect, useCallback, useRef } from 'react';
import { PrevButton, NextButton } from './CarousleBtn/CarousleBtn';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { getImage, getGameTime, goToBettingClient } from '../../../Utils/utils';
import './Carousel .css';

const autoPlayOptions = { loop: true };

const Carousel = ({ eventsData }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(autoPlayOptions, [
    autoplay.current,
  ]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className='embla' data-testid='carousel-container'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {eventsData.map((event, index) => {
              return (
                <div
                  className='embla__slide'
                  key={event.event.id}
                  data-testid='slider'
                >
                  <div className='embla__slide__center'>
                    <p className='score'>
                      {event.liveData.score?.home} -{' '}
                      {event.liveData.score?.away}
                    </p>
                    <p className='teams'>
                      <img
                        className='sport-img'
                        src={getImage(event.event.sport)}
                        alt={event.event.sport}
                      />
                      {event.event.homeName}{' '}
                      <strong className='score'>vs</strong>{' '}
                      {event.event.awayName}
                    </p>
                    <p className='sport-time'>
                      {getGameTime(event.event.start)}
                    </p>
                    <button
                      className='bet-btn'
                      onClick={() => goToBettingClient(event.event.id)}
                    >
                      Place a bet
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </>
  );
};

export default Carousel;
