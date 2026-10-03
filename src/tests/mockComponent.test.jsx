import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockComponent from '../mockComponent';
describe('Buttons renders and works as intended', () => {
  it('Renders correctly', () => {
    render(<MockComponent OnClick={() => {}} />);
    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toBeInTheDocument();
  });
  it('Calls the function when clicked', async () => {
    const user = userEvent.setup();
    const onclick = vi.fn();
    render(<MockComponent OnClick={onclick} />);
    const button = screen.getByRole('button', { name: 'Click Me' });
    await user.click(button);
  });
  it('Does not call the function when not clicked', () => {
    const onclick = vi.fn();
    render(<MockComponent OnClick={onclick} />);
    expect(onclick).not.toHaveBeenCalled();
  });
});
