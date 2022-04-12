import { render } from '@testing-library/react';
import { renderWithTheme } from '../../../helpers/theme';
import Loader from '../Loader';

describe('<Loader />', () => {
  it('renders correctly', () => {
    const { container } = render(renderWithTheme(<Loader />));

    expect(container).toMatchSnapshot();
  });
});
