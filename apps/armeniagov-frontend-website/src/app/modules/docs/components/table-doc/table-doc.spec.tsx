import { render } from '@testing-library/react';

import TableDoc from './table-doc';

describe('TableDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableDoc />);
    expect(baseElement).toBeTruthy();
  });
});
