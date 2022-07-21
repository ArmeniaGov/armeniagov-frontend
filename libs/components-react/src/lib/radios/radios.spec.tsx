import { render } from '@testing-library/react';

import Radios from './radios';

describe('Radios', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Radios />);
    expect(baseElement).toBeTruthy();
  });
});
