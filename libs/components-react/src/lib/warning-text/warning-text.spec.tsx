import { render } from '@testing-library/react';

import WarningText from './warning-text';

describe('WarningText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarningText />);
    expect(baseElement).toBeTruthy();
  });
});
