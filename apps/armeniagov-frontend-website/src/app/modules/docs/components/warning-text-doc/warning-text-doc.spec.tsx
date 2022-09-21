import { render } from '@testing-library/react';

import WarningTextDoc from './warning-text-doc';

describe('WarningTextDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarningTextDoc />);
    expect(baseElement).toBeTruthy();
  });
});
