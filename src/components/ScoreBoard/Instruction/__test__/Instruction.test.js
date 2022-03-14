import { render, screen } from '@testing-library/react';
import Instruction from '../Instruction';

describe('Instruction Component', () => {
  test('Should have render title correctly with h1 tag', () => {
    render(<Instruction />);
    const headerElement = screen.getByRole('heading', { level: 2 });
    expect(headerElement).toBeInTheDocument();
  });

  test('Should  have  multiple para information', () => {
    render(<Instruction />);
    const instructionParaOne = screen.getByTestId('instruction-1');
    const instructionParaTwo = screen.getByTestId('instruction-2');
    expect(instructionParaOne).toBeInTheDocument();
    expect(instructionParaTwo).toBeInTheDocument();
  });

  test('Should  have not have more than two para information', () => {
    render(<Instruction />);
    const instructionParaThree = screen.queryByTestId('instruction-3');
    expect(instructionParaThree).not.toBeInTheDocument();
  });
});
