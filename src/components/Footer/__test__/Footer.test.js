import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('Should have render footer correctly', () => {
    render(<Footer />);
    const footerEle = screen.getByText(
      /1997-2015, Unibet. All rights reserved./
    );
    expect(footerEle).toBeInTheDocument();
  });

  test('Should not have incorrect text on footer', () => {
    render(<Footer />);
    const headerEle = screen.queryByText('All rights reserved');
    expect(headerEle).not.toBeInTheDocument();
  });
});
