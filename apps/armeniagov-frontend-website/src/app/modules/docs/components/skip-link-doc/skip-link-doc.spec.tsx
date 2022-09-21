import { render } from '@testing-library/react';

import SkipLinkDoc from './skip-link-doc';

describe('SkipLinkDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkipLinkDoc />);
    expect(baseElement).toBeTruthy();
  });
});
