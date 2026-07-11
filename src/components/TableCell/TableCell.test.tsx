import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

test('renders cell value', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell value="John" />
        </tr>
      </tbody>
    </table>,
  );

  expect(screen.getByText('John')).toBeInTheDocument();
});
