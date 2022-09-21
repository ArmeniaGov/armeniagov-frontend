import { render } from '@testing-library/react';

import PhaseBannerDoc from './phase-banner-doc';

describe('PhaseBannerDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhaseBannerDoc />);
    expect(baseElement).toBeTruthy();
  });
});
