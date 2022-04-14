import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RenderWithTheme } from '../../../helpers/testUtils';
import IconButton from '../IconButton';

describe('<IconButton />', () => {
  const props = {
    iconPath: '/arrow-left-dark.svg',
    onClick: () => {},
  };

  it('displays the correct icon', () => {
    render(
      <RenderWithTheme>
        <IconButton {...props} />
      </RenderWithTheme>,
    );

    const icon = screen.getByAltText('icon button');
    expect(icon.getAttribute('src')).toBe('/arrow-left-dark.svg');
  });

  it('calls the correct callback on click', async () => {
    const onClick = jest.fn();

    render(
      <RenderWithTheme>
        <IconButton {...props} onClick={onClick} />
      </RenderWithTheme>,
    );

    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
