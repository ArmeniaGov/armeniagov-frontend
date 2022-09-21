import { render } from '@testing-library/react';

import PaginationDoc from './pagination-doc';

describe('PaginationDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaginationDoc />);
    expect(baseElement).toBeTruthy();
  });
});
