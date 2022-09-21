import { render } from '@testing-library/react';

import BackLinkDoc from './back-link-doc';

describe('BackLinkDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackLinkDoc />);
    expect(baseElement).toBeTruthy();
  });
});
