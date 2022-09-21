import { render } from '@testing-library/react';

import DateInputDoc from './date-input-doc';

describe('DateInputDoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateInputDoc />);
    expect(baseElement).toBeTruthy();
  });
});
