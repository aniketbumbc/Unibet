import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './Header.css';

const Header = () => {
  return (
    <>
      <header data-testid='header'>
        <div className='header-logo'>Unibet</div>
      </header>
      <ScoreBoard />
    </>
  );
};

export default Header;
