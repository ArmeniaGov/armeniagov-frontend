import { render } from '@testing-library/react';

import BackLink from './back-link';

describe('BackLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackLink />);
    expect(baseElement).toBeTruthy();
  });
});
