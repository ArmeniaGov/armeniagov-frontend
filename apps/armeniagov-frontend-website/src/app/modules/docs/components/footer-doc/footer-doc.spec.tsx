import { render } from '@testing-library/react';

import FooterDoc from './footer-doc';

describe('FooterDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterDoc />);
    expect(baseElement).toBeTruthy();
  });
});
