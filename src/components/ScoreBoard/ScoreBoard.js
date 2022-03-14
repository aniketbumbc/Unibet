import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import Loader from '../Loader/Loader';
import Carousel from './Carousel /Carousel ';
import Fotter from '../Footer/Footer';
import Instruction from './Instruction/Instruction';
import './ScoreBoard.css';
import ErrorBoundary from '../Error Boundary/ErrorBoundary';

const ScoreBoard = () => {
  const { eventsData, loading, error } = useFetch();
  return (
    <>
      {!!error.length && !loading && <ErrorBoundary error={error} />}
      {loading && !eventsData.length && <Loader />}
      {!loading && !!eventsData.length && (
        <>
          <div className='score-container'>
            <article>
              <h1>Live matches</h1>
              <p className='preamble'>
                Here is a list of matches that are live right now.
              </p>
              <div className='carousel-container'>
                <Carousel eventsData={eventsData} />
                <Instruction />
              </div>
            </article>
          </div>
          <Fotter />
        </>
      )}
    </>
  );
};

export default React.memo(ScoreBoard);
