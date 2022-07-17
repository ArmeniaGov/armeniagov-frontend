import { render } from '@testing-library/react';

import PhaseBanner from './phase-banner';

describe('PhaseBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhaseBanner />);
    expect(baseElement).toBeTruthy();
  });
});
