import { render, screen } from '@testing-library/react';
import CmpDeClase from './CmpDeClase';

test('renders learn react text at CmpDeClase', () => {
  render(<CmpDeClase />);
  const linkElement = screen.getByText(/Esto es un componente de clase/i);
  expect(linkElement).toBeInTheDocument();
});
