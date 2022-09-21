import { render } from '@testing-library/react';

import SummaryListDoc from './summary-list-doc';

describe('SummaryListDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SummaryListDoc />);
    expect(baseElement).toBeTruthy();
  });
});
