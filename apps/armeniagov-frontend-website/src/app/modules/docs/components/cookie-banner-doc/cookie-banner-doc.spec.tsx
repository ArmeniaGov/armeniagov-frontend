import { render } from '@testing-library/react';

import CookieBannerDoc from './cookie-banner-doc';

describe('CookieBannerDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CookieBannerDoc />);
    expect(baseElement).toBeTruthy();
  });
});
