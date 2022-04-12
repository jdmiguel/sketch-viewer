import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IconButton from '../IconButton';

describe('<IconButton />', () => {
  const props = {
    iconPath: '/arrow-left.svg',
    onClick: () => {},
  };

  it('displays the correct icon', () => {
    render(<IconButton {...props} />);

    const icon = screen.getByAltText('icon button');
    expect(icon.getAttribute('src')).toBe('/arrow-left.svg');
  });

  it('calls the correct callback on click', async () => {
    const onClick = jest.fn();

    render(<IconButton {...props} onClick={onClick} />);

    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
