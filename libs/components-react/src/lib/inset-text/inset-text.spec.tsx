import { render } from '@testing-library/react';

import InsetText from './inset-text';

describe('InsetText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InsetText />);
    expect(baseElement).toBeTruthy();
  });
});
