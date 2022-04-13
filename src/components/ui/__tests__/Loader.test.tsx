import { render } from '@testing-library/react';
import { RenderWithTheme } from '../../../helpers/testUtils';
import Loader from '../Loader';

describe('<Loader />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <RenderWithTheme>
        <Loader />
      </RenderWithTheme>,
    );

    expect(container).toMatchSnapshot();
  });
});
