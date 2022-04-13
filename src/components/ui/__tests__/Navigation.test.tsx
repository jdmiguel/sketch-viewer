import { render, screen } from '@testing-library/react';
import { RenderWithTheme } from '../../../helpers/testUtils';
import Navigation from '../Navigation';

describe('<Navigation />', () => {
  it('displays the arrow left button', () => {
    render(
      <RenderWithTheme>
        <Navigation />
      </RenderWithTheme>,
    );

    const arrowLeftButton = screen.getAllByAltText('icon button')[0];
    expect(arrowLeftButton.getAttribute('src')).toBe('arrow-left.svg');
  });

  it('displays the arrow right button', () => {
    render(
      <RenderWithTheme>
        <Navigation />
      </RenderWithTheme>,
    );

    const arrowLeftButton = screen.getAllByAltText('icon button')[1];
    expect(arrowLeftButton.getAttribute('src')).toBe('arrow-right.svg');
  });

  it('displays the steps', () => {
    render(
      <RenderWithTheme>
        <Navigation />
      </RenderWithTheme>,
    );

    const step = screen.getAllByText('0')[0];
    expect(step).toBeInTheDocument();

    const totalsteps = screen.getAllByText('0')[1];
    expect(totalsteps).toBeInTheDocument();
  });

  it('displays the separator', () => {
    render(
      <RenderWithTheme>
        <Navigation />
      </RenderWithTheme>,
    );

    expect(screen.getByAltText('step separator')).toBeInTheDocument();
  });
});
