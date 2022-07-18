import { render } from '@testing-library/react';

import Fieldset from './fieldset';

describe('Fieldset', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fieldset />);
    expect(baseElement).toBeTruthy();
  });
});
