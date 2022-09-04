import { render } from '@testing-library/react';

import SubNavigation from './sub-navigation';

describe('SubNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
