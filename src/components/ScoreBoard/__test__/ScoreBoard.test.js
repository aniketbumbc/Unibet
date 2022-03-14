import { render, screen } from '@testing-library/react';
import ScoreBoard from '../ScoreBoard';

describe('ScoreBoard Component', () => {
  test('Should have intial render with null before getting events', () => {
    render(<ScoreBoard />);
    const headerElement = screen.queryByText(/Live matches/i);
    expect(headerElement).toBe(null);
  });

  test('Should have para information intial render with null before getting events', () => {
    render(<ScoreBoard />);
    const paraEle = screen.queryByText(
      /Here is a list of matches that are live right now/i
    );
    expect(paraEle).toBe(null);
  });
});
