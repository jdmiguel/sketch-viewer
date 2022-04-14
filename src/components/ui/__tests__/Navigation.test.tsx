import { render, screen } from '@testing-library/react';
import { RenderWithTheme } from '../../../helpers/testUtils';
import Navigation from '../Navigation';

describe('<Navigation />', () => {
  it('displays the next button', () => {
    render(
      <RenderWithTheme>
        <Navigation />
      </RenderWithTheme>,
    );

    const prevButton = screen.getAllByAltText('icon button')[0];
    expect(prevButton.getAttribute('src')).toBe('arrow-left-dark.svg');
  });

  it('displays the prev button', () => {
    render(
      <RenderWithTheme>
        <Navigation />
      </RenderWithTheme>,
    );

    const nextButton = screen.getAllByAltText('icon button')[1];
    expect(nextButton.getAttribute('src')).toBe('arrow-right-dark.svg');
  });

  it('displays the steps', () => {
    render(
      <RenderWithTheme>
        <Navigation />
      </RenderWithTheme>,
    );

    const [step, totalsteps] = screen.getAllByText('0');
    expect(step).toBeInTheDocument();
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
