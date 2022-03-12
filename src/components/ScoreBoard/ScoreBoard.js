import Carousel from './Carousel /Carousel ';
import Instruction from './Instruction/Instruction';
import './ScoreBoard.css';

const ScoreBoard = () => {
  return (
    <>
      <div className='score-container'>
        <article>
          <h1>Live matches</h1>
          <p className='preamble'>
            Here is a list of matches that are live right now.
          </p>
          <Carousel />
          <Instruction />
        </article>
      </div>
    </>
  );
};

export default ScoreBoard;
