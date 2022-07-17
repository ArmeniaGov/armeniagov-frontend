import { render } from '@testing-library/react';

import SummaryList from './summary-list';

describe('SummaryList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SummaryList />);
    expect(baseElement).toBeTruthy();
  });
});
