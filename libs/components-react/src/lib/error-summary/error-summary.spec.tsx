import { render } from '@testing-library/react';

import ErrorSummary from './error-summary';

describe('ErrorSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorSummary />);
    expect(baseElement).toBeTruthy();
  });
});
