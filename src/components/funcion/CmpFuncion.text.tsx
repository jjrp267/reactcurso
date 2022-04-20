import { render, screen } from '@testing-library/react';
import CmpFuncion from './CmpFuncion';


test('renders learn react text at CmpFuncion', () => {
  render(<CmpFuncion />);
  const linkElement = screen.getByText(/Esto es un componente funcional/i);
  expect(linkElement).toBeInTheDocument();
});
