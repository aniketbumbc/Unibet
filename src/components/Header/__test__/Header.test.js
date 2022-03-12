import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  test('Should have render header correctly', () => {
    const { getByText, getByTestId } = render(<Header />);
    expect(getByTestId('header')).toBeTruthy();
    expect(getByText('Unibet')).toBeTruthy();
  });

  test('Should not have incorrect header logo', () => {
    render(<Header />);
    const headerEle = screen.queryByText('test');
    expect(headerEle).not.toBeInTheDocument();
  });
});
