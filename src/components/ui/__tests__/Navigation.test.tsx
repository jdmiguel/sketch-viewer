import { render, screen } from '@testing-library/react';
import { renderWithTheme } from '../../../helpers/theme';
import Navigation from '../Navigation';

describe('<Navigation />', () => {
  it('displays the arrow left button', () => {
    render(renderWithTheme(<Navigation />));

    const arrowLeftButton = screen.getAllByAltText('icon button')[0];
    expect(arrowLeftButton.getAttribute('src')).toBe('arrow-left.svg');
  });

  it('displays the arrow right button', () => {
    render(renderWithTheme(<Navigation />));

    const arrowLeftButton = screen.getAllByAltText('icon button')[1];
    expect(arrowLeftButton.getAttribute('src')).toBe('arrow-right.svg');
  });

  it('displays the steps', () => {
    render(renderWithTheme(<Navigation />));

    const step = screen.getAllByText('0')[0];
    expect(step).toBeInTheDocument();

    const totalsteps = screen.getAllByText('0')[1];
    expect(totalsteps).toBeInTheDocument();
  });

  it('displays the separator', () => {
    render(renderWithTheme(<Navigation />));

    expect(screen.getByAltText('step separator')).toBeInTheDocument();
  });
});
