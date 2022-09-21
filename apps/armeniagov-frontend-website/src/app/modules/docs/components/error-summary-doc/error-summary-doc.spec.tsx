import { render } from '@testing-library/react';

import ErrorSummaryDoc from './error-summary-doc';

describe('ErrorSummaryDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorSummaryDoc />);
    expect(baseElement).toBeTruthy();
  });
});
