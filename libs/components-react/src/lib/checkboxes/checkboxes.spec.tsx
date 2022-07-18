import { render } from '@testing-library/react';

import Checkboxes from './checkboxes';

describe('Checkboxes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkboxes />);
    expect(baseElement).toBeTruthy();
  });
});
