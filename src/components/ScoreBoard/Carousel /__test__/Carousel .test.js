import { render, screen } from '@testing-library/react';
import { eventsTestData } from '../../../../TestData/TestData';
import Carousel from '../Carousel ';

describe('Carousel Component', () => {
  beforeEach(() => {
    render(<Carousel eventsData={eventsTestData} />);
  });

  test('Should have render carousel container correctly', () => {
    const carouselElement = screen.getByTestId('carousel-container');
    expect(carouselElement).toBeInTheDocument();
  });

  test('Should render correct events count', () => {
    const eventsCount = screen.getAllByTestId('slider');
    expect(eventsCount.length).toBe(3);
  });

  test('Should print events score correctly', () => {
    const scoreEvent1 = screen.getByText('18 - 19');
    const scoreEvent2 = screen.getByText('12 - 3');
    expect(scoreEvent1).toBeInTheDocument();
    expect(scoreEvent2).toBeInTheDocument();
  });

  test('Should show three different images based on sports type', () => {
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);
  });

  test('Should display correct teams information', () => {
    const { container } = render(<Carousel eventsData={eventsTestData} />);
    expect(container).toHaveTextContent('Top Speed Group (W) vs JSL Group (W');
    expect(container).toHaveTextContent(
      'Atenas de CÃ³rdoba (W) vs Club Banco Provincia (W)'
    );
    expect(container).toHaveTextContent('Botafogo-SP vs Novorizontino-SP');
  });

  test('Should not display incorrect team information', () => {
    const { container } = render(<Carousel eventsData={eventsTestData} />);
    expect(container).not.toHaveTextContent('England vs Spain ');
  });

  test('Should display correct teams schedule', () => {
    const { container } = render(<Carousel eventsData={eventsTestData} />);
    expect(container).toHaveTextContent('2022-03-11, 16:09:00');
    expect(container).toHaveTextContent('2022-03-13, 05:25:00');
    expect(container).toHaveTextContent('2022-03-13, 05:00:00');
  });

  test('Should display correct button for all scoreboard', () => {
    const buttonEle = screen.getAllByRole('button', { name: 'Place a bet' });
    expect(buttonEle.length).toBe(3);
  });
});
