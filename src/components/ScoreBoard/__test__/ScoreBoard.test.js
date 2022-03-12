import { render, screen } from '@testing-library/react';
import ScoreBoard from '../ScoreBoard';

describe('ScoreBoard Component', () => {
  test('Should have render title correctly with h1 tag', () => {
    render(<ScoreBoard />);
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();
  });

  test('Should  have correct para information', () => {
    render(<ScoreBoard />);
    const paraEle = screen.queryByText(
      /Here is a list of matches that are live right now/i
    );
    expect(paraEle).toBeInTheDocument();
  });
});
