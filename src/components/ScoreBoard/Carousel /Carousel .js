import { useState, useEffect, useCallback, useRef } from 'react';
import { PrevButton, NextButton } from './CarousleBtn/CarousleBtn';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { getImage } from '../../../Utils/utils';
import demoData from '../../../demo.json';
import './Carousel .css';

const autoPlayOptions = { loop: true };

const Carousel = () => {
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
      <div className='embla'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {demoData.map((data, index) => {
              return (
                <div className='embla__slide' key={data.event.id}>
                  <div className='embla__slide__center'>
                    <p className='score'>
                      {data.liveData.score.home} - {data.liveData.score.away}
                    </p>
                    <p className='teams'>
                      <img
                        className='sport-img'
                        src={getImage(data.event.sport)}
                        alt={data.event.sport}
                      />
                      {data.event.homeName} {data.event.awayName}
                    </p>
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
