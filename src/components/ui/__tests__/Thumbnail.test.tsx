import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RenderWithTheme } from '../../../helpers/testUtils';
import Thumbnail from '../Thumbnail';

describe('<Thumbnail />', () => {
  const props = {
    imgPath: '/document.png',
    name: 'document',
    onClick: () => {},
  };

  it('displays the correct thumbnail image', () => {
    render(
      <RenderWithTheme>
        <Thumbnail {...props} />
      </RenderWithTheme>,
    );

    const image = screen.getByAltText('document');
    expect(image.getAttribute('src')).toBe('/document.png');
  });

  it('displays the correct thumbnail text', () => {
    render(
      <RenderWithTheme>
        <Thumbnail {...props} />
      </RenderWithTheme>,
    );
    expect(screen.getByText('document')).toBeInTheDocument();
  });

  it('displays the correct styles with withRootStyles', () => {
    render(
      <RenderWithTheme>
        <Thumbnail {...props} withRootStyles />
      </RenderWithTheme>,
    );

    const thumbnail = screen.getByRole('button');
    expect(thumbnail).toHaveStyleRule('align-items', 'flex-start');
    expect(thumbnail).toHaveStyleRule('background-color', '#EFEFEF');
    expect(thumbnail).toHaveStyleRule('border', '1px solid #E0E0E0');
    expect(thumbnail).toHaveStyleRule('border-radius', '8px');
    expect(thumbnail).toHaveStyleRule('box-shadow', '1px 2px 5px rgba(0,0,0,0.1)');
    expect(thumbnail).toHaveStyleRule('font-weight', '600');
  });

  it('calls the correct callback with the expected param on click', async () => {
    const onClick = jest.fn();

    render(
      <RenderWithTheme>
        <Thumbnail {...props} onClick={onClick} />
      </RenderWithTheme>,
    );

    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledWith('document');
  });
});
